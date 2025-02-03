"use client";

import WeatherDetails from "./weather-details";
import LocationComponent from "./location-component";
import useSearchQuery from "@/hook/useSearch";

const WeatherLayout = () => {
  const { query, setQuery, handleKeyPress, handleSubmit, weatherData } =
    useSearchQuery();

  // console.log(weatherData);

  return (
    <div className="grid grid-flow-row grid-cols-3 h-screen">
      <div className="col-span-2 bg-[#d1dbe0] w-full">Try me</div>
      <div className="grid grid-rows-2 bg-[#1B4965] w-full">
        <LocationComponent
          query={query}
          setQuery={setQuery}
          handleKeyDown={handleKeyPress}
          handleSubmit={handleSubmit}
        />
        <WeatherDetails />
      </div>
    </div>
  );
};

export default WeatherLayout;
