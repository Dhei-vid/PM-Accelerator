import { useState, useEffect, KeyboardEvent } from "react";
import { IWeatherData } from "@/common/types";
import { fetchWeatherData } from "@/common/helper";

const useSearchQuery = (initialQuery = "") => {
  const [query, setQuery] = useState<string>(initialQuery);
  const [submittedQuery, setSubmittedQuery] = useState<string>("");
  const [weatherData, setWeatherData] = useState<
    IWeatherData | null | undefined
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
