import { ChangeEventHandler, KeyboardEventHandler } from "react";

export type WeatherInfomation = {
  name: string;
  weather: [{ description: string }];
  coord: {
    lon: number;
    lat: number;
  };
  main: { temp: number; pressure: number; humidity: number };
  wind: { speed: number };
};

export type CardWeatherProps = {
  data: WeatherInfomation | null;
};

export type ErrorProps = {
  errorMessage: string;
};

export interface IWeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: number;
  };
  current: {
    temp_c: string;
    temp_f: string;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
  };
}
