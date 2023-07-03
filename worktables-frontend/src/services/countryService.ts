// worktables-frontend/src/services/countryService.ts
import mondaySdk from "monday-sdk-js"
import { MondayApiResponse, CountryData } from "../types/Country"

export async function getCountries(): Promise<CountryData[]> {
  const query = `query { boards(ids:[4505502032]) { items { name column_values { id text } } } }`
  const monday = mondaySdk()
  const response = (await monday.api(query)) as MondayApiResponse
  return response.data.boards[0].items
}