import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabasePublishableKey as string, {
      auth: {
        persistSession: false
      }
    })
  : null;

export type BoardPost = {
  id: string;
  author_name: string;
  affiliation: string | null;
  category: "계열제 평가" | "계열제 보완" | "전공신설" | "기타";
  body: string;
  created_at: string;
};
