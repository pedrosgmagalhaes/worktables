// routes/index.ts
import express from 'express';
import WeatherController from '../controllers/weatherController';

const routes = express.Router();

routes.get('/weather/:country', WeatherController.getWeather);

export default routes;
