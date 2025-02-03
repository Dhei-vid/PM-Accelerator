import WeatherDetailsCard from "./weather-details-card";

const WeatherDetails = () => {
  return (
    <div
      className={
        "flex flex-col gap-6 m-6 pt-6 border-t-[1px] border-[#EAE6E5]/50 mt-5"
      }
    >
      <h1 className={"font-semibold text-[#EAE6E5]"}>Weather Details</h1>
      <div className={"flex flex-col gap-6 w-full"}>
        <WeatherDetailsCard title={"Cloudy"} weatherReport={"11%"} />
        <WeatherDetailsCard title={"Humidity"} weatherReport={"78%"} />
        <WeatherDetailsCard title={"Windy"} weatherReport={"1km/h"} />
        <WeatherDetailsCard title={"Rain"} weatherReport={"0mm"} />
      </div>
    </div>
  );
};

export default WeatherDetails;
