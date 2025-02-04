import { FC } from "react";

interface IWeatherDetailsCard {
  title: string;
  weatherReport: number | string | null | undefined;
}

const WeatherDetailsCard: FC<IWeatherDetailsCard> = ({
  title,
  weatherReport,
}) => {
  return (
    <div className={"flex flex-row items-center justify-between"}>
      <p className={"font-light text-[#EAE6E5]"}>{title}</p>
      <p className={"font-semibold text-[#EAE6E5]"}>{weatherReport}</p>
    </div>
  );
};

export default WeatherDetailsCard;
