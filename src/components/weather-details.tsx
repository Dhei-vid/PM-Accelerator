import { FC } from "react";
import WeatherDetailsCard from "./weather-details-card";
import { IWeatherData } from "@/common/types";

type IWeatherDetails = {
  data: IWeatherData | null | undefined;
};

const WeatherDetails: FC<IWeatherDetails> = ({ data }) => {
  return (
    <div
      className={
        "flex flex-col gap-6 m-6 pt-6 border-t-[1px] border-[#EAE6E5]/50 mt-5"
      }
    >
      <h1 className={"font-semibold text-[#EAE6E5]"}>Weather Details</h1>

      <div>
        {data ? (
          <div className={"flex flex-col gap-6 w-full"}>
            <WeatherDetailsCard
              title={"Cloudy"}
              weatherReport={`${data?.current?.cloud}%`}
            />
            <WeatherDetailsCard
              title={"Humidity"}
              weatherReport={`${data?.current?.humidity}%`}
            />
            <WeatherDetailsCard
              title={"Windy"}
              weatherReport={`${data?.current?.wind_kph}km/h | ${data?.current?.wind_mph}m/h`}
            />
            <WeatherDetailsCard
              title={"Rain"}
              weatherReport={data?.current?.precip_mm}
            />
          </div>
        ) : (
          <div className={"flex justify-center h-full"}>
            <p className={"text-secondary"}>Not available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDetails;
