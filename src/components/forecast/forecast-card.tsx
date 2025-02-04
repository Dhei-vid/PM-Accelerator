import { FC } from "react";
import { format } from "date-fns";
import Image from "next/image";

interface IForeCastCard {
  forecastData:
    | {
        date: string;
        day: {
          avgtemp_c: number;
          avgtemp_f: number;
          maxwind_mph: number;
          maxwind_kph: number;
          totalprecip_mm: number;
          totalprecip_in: number;
          totalsnow_cm: number;
          condition: {
            text: string;
            icon: string;
          };
        };
        hour: {
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          humidity: number;
          cloud: number;
          wind_kph: number;
          wind_mph: number;
          wind_degree: number;
          wind_dir: string;
          precip_mm: number;
          precip_in: number;
          snow_cm: number;
          condition: {
            text: string;
            icon: string;
          };
        }[];
      }
    | undefined
    | null;
}

const ForeCastCard: FC<IForeCastCard> = ({ forecastData }) => {
  const formatedDate = format(new Date(forecastData?.date as string), "EEE");
  return (
    <div
      className={
        "flex flex-col items-center justiify-center rounded-xl border border-primary w-40 h-56 hover:bg-primary/20 cursor-pointer transition-all ease-in-out duration-150 py-5 px-2"
      }
    >
      <div>
        <p className={"text-lg font-semibold text-primary"}>{formatedDate}</p>
      </div>

      <div>
        <Image
          width={70}
          height={70}
          src={`https:${forecastData?.day?.condition?.icon as string}`}
          alt={`${forecastData?.day?.condition.text} icon`}
        />
      </div>

      <div
        className={
          "flex flex-col gap-3 justify-center items-center text-center"
        }
      >
        <p className={"text-lg font-semibold text-primary"}>
          °{forecastData?.day?.avgtemp_c}C / {forecastData?.day?.avgtemp_c}°F
        </p>
        <p className={"text-base text-primary"}>
          {forecastData?.day?.condition?.text}
        </p>
      </div>
    </div>
  );
};

export default ForeCastCard;
