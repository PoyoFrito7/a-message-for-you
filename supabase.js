import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://nqigpnmfdastkvjydhku.supabase.co";

const SUPABASE_KEY = "sb_publishable_T9F1x_fjdeu-TZTOFlQrcg_-6B20Dh-";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
