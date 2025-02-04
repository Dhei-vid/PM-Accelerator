import { FC } from "react";
import { IWeatherData } from "@/common/types";
import { format } from "date-fns";
import Image from "next/image";

interface ILocationDetails {
  data: IWeatherData | undefined | null;
}

const LocationDetails: FC<ILocationDetails> = ({ data }) => {
  const formatedDate = format(
    new Date(data?.location?.localtime as unknown as string),
    "p - EEEE, ee LLL YYYY"
  );
  const date = new Date(data?.location?.localtime as unknown as string);
  return (
    <div className={"flex flex-row justify-between p-12 items-center"}>
      <div>
        <p className={"text-6xl font-bold"}>°{data?.current?.temp_c}C</p>
      </div>
      <div className={"flex flex-col gap-2"}>
        <p className={"text-2xl font-semibold"}>{data?.location?.name}</p>
        <div>
          <p className={"text-base"}>{formatedDate}</p>
        </div>
      </div>

      <div>
        {/* <Image
          width={40}
          height={40}
          src={`https:${data?.current?.condition?.icon as string}`}
          alt={`${data?.current?.condition?.text} weather icon`}
        /> */}
        <p>{data?.current?.condition?.text}</p>
      </div>
    </div>
  );
};

export default LocationDetails;
