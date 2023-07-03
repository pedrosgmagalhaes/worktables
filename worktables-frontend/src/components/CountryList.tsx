// worktables-frontend/src/components/CountryList.tsx
import React from "react"
import { Button } from "monday-ui-react-core"
import { CountryListProps } from "../types/Country"

const CountryList: React.FC<CountryListProps> = ({ countries, onSelect, searchAttempted }) => {
  if (countries.length === 0 && searchAttempted) {
    return <div style={{ paddingTop: "10px", display: 'flex' }}>No countries found.</div>;
  }
  
  return (
    <div style={{ paddingTop: "10px", display: 'flex' }}>
      {countries.map((country, i) => (
        <div key={i} style={{ padding: "2px" }}>
          <Button onClick={() => onSelect(country)}>
            {country.name}
          </Button>
        </div>
      ))}
    </div>
  )
}

export default CountryList
