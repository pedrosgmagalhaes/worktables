// worktables-frontend/src/components/CountryModal.tsx
import React from "react"
import { CountryModalProps } from "../types/Country"
import { Button, DialogContentContainer } from "monday-ui-react-core"

const CountryModal: React.FC<CountryModalProps> = ({
  country,
  weather,
  onClose,
}) => {
  if (!country) {
    return null
  }

  const countryName = country.name
  const weatherDetails = weather
    ? [
        { label: "Country", value: countryName },
        { label: "Region", value: weather.location.region },
        { label: "Temperature (°C)", value: weather.current.temp_c },
        { label: "Temperature (°F)", value: weather.current.temp_f },
        { label: "Feels Like (°C)", value: weather.current.feelslike_c },
        { label: "Wind Speed (kph)", value: weather.current.wind_kph },
        { label: "Wind Direction", value: weather.current.wind_dir },
        { label: "Pressure (mb)", value: weather.current.pressure_mb },
        { label: "Precipitation (mm)", value: weather.current.precip_mm },
        { label: "Humidity (%)", value: weather.current.humidity },
        { label: "Cloud Cover (%)", value: weather.current.cloud },
        { label: "UV Index", value: weather.current.uv },
        { label: "Condition", value: weather.current.condition.text },
      ]
    : []

  return (
    <DialogContentContainer type={DialogContentContainer.types.POPOVER}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {weatherDetails.map((detail, index) => (
          <div
            key={index}
            style={{ flex: "1 1 calc(50% - 8px)", margin: "2px" }}
          >
            <p>{`${detail.label}: ${detail.value}`}</p>
          </div>
        ))}
      </div>
      <Button onClick={onClose}>Close</Button>
    </DialogContentContainer>
  )
}

export default CountryModal
