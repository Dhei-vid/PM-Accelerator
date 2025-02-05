import WeatherDetails from "./weather-details";
import LocationComponent from "./location-component";
import useSearchQuery from "@/hook/useSearch";
import LocationDetails from "./location-details";
import ForeCastComponent from "./forecast/forecast-component";
import ErrorScreen from "./error";
import { Button } from "./ui/button";
import { DialogCloseButton } from "./dialog-component";


const WeatherLayout = () => {
  const {
    locationQuery,
    setLocationQuery,
    dateQuery,
    setDateQuery,
    handleKeyPress,
    handleSubmit,
    weatherData,
  } = useSearchQuery();

  return (
    <div>
      <div className="grid grid-cols-1 grid-flow-row md:grid-cols-3 h-screen">
        <div className="row-start-2 md:row-start-1 md:col-span-2 bg-secondary w-full">
          {weatherData ? (
            <div className={"flex flex-col h-full"}>
              <LocationDetails data={weatherData} />
              <ForeCastComponent forecastData={weatherData} />
            </div>
          ) : (
            <ErrorScreen />
          )}
        </div>

        <div className="flex flex-col row-start-1 bg-primary w-full h-full">
          <LocationComponent
            locationQuery={locationQuery}
            setLocationQuery={setLocationQuery}
            dateQuery={dateQuery}
            setDateQuery={setDateQuery}
            handleKeyDown={handleKeyPress}
            handleSubmit={handleSubmit}
          />
          <WeatherDetails data={weatherData} />
          <div className="flex flex-col items-center gap-5 border-t-[1px] border-secondary pt-5 mt-auto">
            <p className="text-secondary">Project by David Etuk</p>
            <DialogCloseButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherLayout;
