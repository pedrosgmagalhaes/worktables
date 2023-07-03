// worktables-backend/src/services/weatherService.ts

import axios from 'axios';
import { WEATHER_API_URL } from '../utils/constants';

class WeatherService {
    static async getWeather(country: string) {
        try {
            const response = await axios.get(`${WEATHER_API_URL}?key=${process.env.WEATHERAPI_KEY}&q=${country}`);
            return response.data;
        } catch (error: unknown) {
            console.log(error);
            throw new Error('An unknown error occurred while fetching weather data');
        }
    }
}

export default WeatherService;
