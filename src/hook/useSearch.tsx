import { useState } from "react";
import { IForecastData, ITotalWeatherData } from "@/common/types";
import { fetchWeatherData } from "@/common/helper";

const useSearchQuery = (initialQuery = "") => {
  const [query, setQuery] = useState<string>(initialQuery);
  const [submittedQuery, setSubmittedQuery] = useState<string>("");
  const [weatherData, setWeatherData] = useState<
    ITotalWeatherData | undefined | null
  >(null);

  const handleSubmit = async () => {
    setSubmittedQuery(query);
    const response = await fetchWeatherData(query);
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
    query,
    setQuery,
    submittedQuery,
    handleKeyPress,
    handleSubmit,
    weatherData,
  };
};

export default useSearchQuery;
