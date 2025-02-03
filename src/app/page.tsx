"use client";
import Image from "next/image";

import { WeatherInfomation } from "@/common/types";
import ErrorMessage from "@/components/error";
import WeatherLayout from "@/components/weather-layout";

export default function Home() {
  return <WeatherLayout />;
}
