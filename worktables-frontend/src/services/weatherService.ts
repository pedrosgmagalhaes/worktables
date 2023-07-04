// worktables-frontend/src/services/weatherService.ts
import axios from "axios"
export const WEATHER_API_URL = 'http://localhost:4002/weather/';

export async function fetchWeatherData(country: string) {
  try {
    const response = await axios.get(`${WEATHER_API_URL}${country}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
  }
};

export default fetchWeatherData;