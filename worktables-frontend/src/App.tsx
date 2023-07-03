// worktables-frontend/src/App.tsx
import React, { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar"
import CountryList from "./components/CountryList"
import { CountryData } from "./types/Country"
import { DialogContentContainer, Loader } from "monday-ui-react-core"
import CountryModal from "./components/CountryModal"
import { fetchWeatherData } from "./services/weatherService"
import { getCountries } from "./services/countryService"

const App: React.FC<{}> = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null)
  const [countries, setCountries] = useState<CountryData[]>([])
  const [searchText, setSearchText] = useState<string>("")
  const [weather, setWeather] = useState<any | null>(null)
  const [searchAttempted, setSearchAttempted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [isFetchingCountries, setIsFetchingCountries] = useState<boolean>(false)

  useEffect(() => {
    const fetchAndSetData = async () => {
      const data = await getCountries()
      setIsFetchingCountries(true)
      setCountries(data)
      setIsFetchingCountries(false)
    }
  
    fetchAndSetData()
  }, [searchText])

  const handleCountrySelect = async (country: CountryData) => {
    const weatherData = await fetchWeatherData(country.name)
    setLoading(true)
    setSelectedCountry(country)
    setWeather(weatherData)
    setLoading(false)
  }

  const handleSearch = (query: string) => {
    setSearchText(query.toLowerCase())
    setSearchAttempted(true)
  }

  const filteredCountries = countries.filter(
    (country) =>
      searchText.length >= 3 &&
      country.name.toLowerCase().startsWith(searchText)
  )

  return (
    <main>
      <SearchBar onSearch={handleSearch} isFetching={isFetchingCountries} />
      {loading ? (
        <Loader size={40} />
      ) : (
        <>
          <CountryList
            countries={filteredCountries}
            onSelect={handleCountrySelect}
            searchAttempted={searchAttempted}
          />
          {selectedCountry && (
            <DialogContentContainer type={DialogContentContainer.types.MODAL}>
              <CountryModal
                country={selectedCountry}
                onClose={() => setSelectedCountry(null)}
                weather={weather}
              />
            </DialogContentContainer>
          )}
        </>
      )}
    </main>
  )
}

export default App
