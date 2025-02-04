import { supabase } from "./superbase";

/**
 * Store searched location to superbase
 * @returns
 */
export const getLocationHistory = async () => {
  try {
    const { data, error } = await supabase.from("weather").select("*");

    if (error) return;

    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Store searched Location to Superbase
 * @param location
 * @param date
 */
export const storeSearchedLocation = async (location: string, date: Date) => {
  try {
    const { data, error } = await supabase.from("weather").insert({
      location: location,
      date: date,
    });

    if (error) console.log(error);

    if (data) console.log(data);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Delete location from Superbase
 * @param id
 */
export const deleteSearchedLocation = async (id: number) => {
  const { error } = await supabase.from("weather").delete().eq("id", id);

  if (error) throw new Error(error.message);
};

/**
 * Update existing weather information on Superbase
 * @param id
 * @param newQuery
 * @returns
 */
export const updateSearch = async (id: number, newQuery: string) => {
  const { data, error } = await supabase
    .from("searches")
    .update({ query: newQuery })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);
  return data;
};
