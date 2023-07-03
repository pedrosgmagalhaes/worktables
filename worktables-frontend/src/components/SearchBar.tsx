// worktables-frontend/src/components/SearchBar.tsx
import React, { ChangeEvent } from "react"
import { TextField, Title, Icon } from "monday-ui-react-core"
import { Country, Search } from "monday-ui-react-core/icons"
import { SearchBarProps } from "../types/SearchBar"

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    onSearch(value)
  }

  return (
    <div
      className="monday-storybook-text-field_size"
      onChange={handleInputChange}
    >
      <Title type="h3" align="center">
        <div
          style={{
            display: "flex",
            alignItems: "space-between",
            color: "var(--color-green-shadow)",
          }}
        >
          <Icon iconSize={25} icon={Country} />
          <span
            style={{
              padding: "0 0 10px 10px",
            }}
          >
            Search Countries
          </span>
        </div>
      </Title>
      <div style={{ position: "relative", maxWidth: "25rem" }}>
        <TextField
          placeholder="Search for a country"
          size={TextField.sizes.LARGE}
        />
        <Icon
          icon={Search}
          iconSize={25}
          style={{ position: "absolute", right: "10px", top: "10px" }}
        />
      </div>
    </div>
  )
}

export default SearchBar
