import { supabase } from "./superbase";

/**
 *
 */
export const getWeatherData = async () => {
  try {
    const { data, error } = await supabase.from("weather").insert({
      location: "Abuja residential",
    });

    if (data) console.log(data);
    if (error) console.log(error);
  } catch (error) {
    console.error(error);
  }
};
