import { useState } from "react";
import { IForecastData, ITotalWeatherData } from "@/common/types";
import { fetchWeatherData } from "@/common/helper";

const useSearchQuery = (initialQuery = "") => {
  const [locationQuery, setLocationQuery] = useState<string>(initialQuery);
  const [dateQuery, setDateQuery] = useState<string>(initialQuery);
  const [weatherData, setWeatherData] = useState<
    ITotalWeatherData | undefined | null
  >(null);

  const handleSubmit = async () => {
    const response = await fetchWeatherData(locationQuery, dateQuery);
    setWeatherData(response);
  };

  const handleKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    await handleSubmit();
  };

  return {
    locationQuery,
    setLocationQuery,
    dateQuery,
    setDateQuery,
    handleKeyPress,
    handleSubmit,
    weatherData,
  };
};

export default useSearchQuery;
