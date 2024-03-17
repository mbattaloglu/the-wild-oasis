import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hvfldpxgdpxcgnflzpsn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2ZmxkcHhnZHB4Y2duZmx6cHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NjIxMjIsImV4cCI6MjAyNjAzODEyMn0.F9ImBpH3Wx_H87sRYAmWlJH-_gmJCukESnwhjjy6eT0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
