import { createClient } from "@supabase/supabase-js";
const supabaseUrl: string = process.env.SUPERBASE_URL!;
const supabaseKey: string = process.env.SUPERBASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
