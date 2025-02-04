"use server";

require("dotenv").config();
import axios from "axios";
import { IWeatherData } from "./types";

/**
 * Fetch weather information based on location
 * @param location : string
 * @returns weather information or error
 */
export const fetchWeatherData = async (location: string) => {
  try {
    const response = await axios<IWeatherData>(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}&aqi=no`
    );

    // return data;
    return response.data;
  } catch (error) {
    console.error("Error fetching weather information ", error);
  }
};
