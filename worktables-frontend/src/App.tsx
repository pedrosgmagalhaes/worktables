// worktables-frontend/src/App.tsx

import React, { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar"
import CountryList from "./components/CountryList"
import { CountryData } from "./types/Country"
import { DialogContentContainer } from "monday-ui-react-core"
import CountryModal from "./components/CountryModal"
import { fetchWeatherData } from "./services/weatherService"
import { getCountries } from "./services/countryService"

const App: React.FC<{}> = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null)
  const [countries, setCountries] = useState<CountryData[]>([])
  const [searchText, setSearchText] = useState<string>("")
  const [weather, setWeather] = useState<any | null>(null)
  const [searchAttempted, setSearchAttempted] = useState<boolean>(false)
  const [isFetchingCountries, setIsFetchingCountries] = useState<boolean>(false)
  const [filteredCountries, setFilteredCountries] = useState<CountryData[]>([])

  useEffect(() => {
    const fetchAndSetData = async () => {
      setIsFetchingCountries(true)
      try {
        const data = await getCountries()
        setCountries(data)
      } catch (error) {
        console.error('Failed to fetch countries:', error)
      } finally {
        setIsFetchingCountries(false)
      }
    }
    fetchAndSetData()
  }, [])

  useEffect(() => {
    const filtered = countries.filter(
      (country) =>
        searchText.length >= 3 &&
        country.name.toLowerCase().startsWith(searchText)
    )
    setFilteredCountries(filtered)
  }, [searchText, countries])

  const handleCountrySelect = async (country: CountryData) => {
    try {
      const weatherData = await fetchWeatherData(country.name)
      setSelectedCountry(country)
      setWeather(weatherData)
    } catch (error) {
      console.error('Failed to fetch weather data:', error)
    }
  }

  const handleSearch = (query: string) => {
    setSearchText(query.toLowerCase())
    setSearchAttempted(true)
  }

  return (
    <main>
      <SearchBar onSearch={handleSearch} isFetching={isFetchingCountries} />
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
    </main>
  )
}

export default App
