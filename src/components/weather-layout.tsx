import WeatherDetails from "./weather-details";
import LocationComponent from "./location-component";
import useSearchQuery from "@/hook/useSearch";
import LocationDetails from "./location-details";
import ForeCastComponent from "./forecast/forecast-component";
import ErrorScreen from "./error";

const WeatherLayout = () => {
  const { query, setQuery, handleKeyPress, handleSubmit, weatherData } =
    useSearchQuery();

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-3 h-screen">
        <div className="col-span-2 bg-secondary w-full">
          {weatherData ? (
            <div className={"grid grid-rows-2 h-full"}>
              <LocationDetails data={weatherData} />
              <ForeCastComponent forecastData={weatherData} />
            </div>
          ) : (
            <ErrorScreen />
          )}
        </div>

        <div className="grid grid-rows-2 bg-primary w-full">
          <LocationComponent
            query={query}
            setQuery={setQuery}
            handleKeyDown={handleKeyPress}
            handleSubmit={handleSubmit}
          />
          <WeatherDetails data={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default WeatherLayout;
