"use server";

require("dotenv").config();
import axios from "axios";
import { ITotalWeatherData } from "./types";

/**
 * Fetch weather information based on location
 * @param location : string
 * @returns weather information or error
 */
export const fetchWeatherData = async (location: string) => {
  try {
    const response = await axios<ITotalWeatherData>(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=5&aqi=no`
    );

    // return data;
    return response.data;
  } catch (error) {
    console.error("Error fetching weather information ", error);
  }
};
