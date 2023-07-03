// controllers/weatherController.ts

import { Request, Response } from 'express';
import WeatherService from '../services/weatherService';

class WeatherController {
    static async getWeather(req: Request, res: Response) {
        const { country } = req.params;
        try {
            const weather = await WeatherService.getWeather(country);
            return res.json(weather);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'An error occurred while fetching weather data.' });
        }
    }
}

export default WeatherController;
