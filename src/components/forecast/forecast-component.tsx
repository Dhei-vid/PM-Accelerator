import { FC } from "react";
import ForeCastCard from "./forecast-card";
import { IForecastData } from "@/common/types";

interface IForeCastComponent {
  forecastData: IForecastData | undefined | null;
}

const ForeCastComponent: FC<IForeCastComponent> = ({ forecastData }) => {
  return (
    <div className={"h-full flex flex-col items-center"}>
      <div className={"bg-primary p-5 w-full"}>
        <p className={"text-lg font-semibold text-secondary"}>
          Weather Forecast
        </p>
      </div>

      <div className={"flex flex-row gap-3 items-center justify-between pt-2"}>
        {forecastData?.forecast.forecastday.map((forecast, index) => {
          return <ForeCastCard key={index} forecastData={forecast} />;
        })}
      </div>
    </div>
  );
};

export default ForeCastComponent;
