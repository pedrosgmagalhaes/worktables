// worktables-frontend/src/components/SearchBar.tsx
import React, { ChangeEvent } from "react"
import { TextField, Title, Icon } from "monday-ui-react-core"
import { Country } from "monday-ui-react-core/icons"
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
          <span style={{
            padding: '0 0 10px 10px'
          }}>Search Countries</span>
        </div>
      </Title>
      <TextField
        labelIconName={Country}
        placeholder="Enter the country name"
        size={TextField.sizes.LARGE}
      />
    </div>
  )
}

export default SearchBar
