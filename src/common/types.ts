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
    localtime: number; // Should be a number
  };
  current: {
    temp_c: number; // Changed from string to number
    temp_f: number; // Changed from string to number
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
export interface IForecastData {
  forecast: {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: number;
        avgtemp_f: number;
        maxwind_mph: number;
        maxwind_kph: number;
        totalprecip_mm: number;
        totalprecip_in: number;
        totalsnow_cm: number;
        condition: {
          text: string;
          icon: string;
        };
      };
      hour: {
        time_epoch: number;
        time: string;
        temp_c: number;
        temp_f: number;
        humidity: number;
        cloud: number;
        wind_kph: number;
        wind_mph: number;
        wind_degree: number;
        wind_dir: string;
        precip_mm: number;
        precip_in: number;
        snow_cm: number;
        condition: {
          text: string;
          icon: string;
        };
      }[];
    }[];
  };
}

export type ITotalWeatherData = IWeatherData & IForecastData;
