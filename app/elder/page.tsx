import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ElderProfile from "./Elder_profile";

// Definir tipos para las propiedades de `ElderPage`
interface User {
  email: string;
  app_metadata: {
    role: string;
  };
}



interface Elder {
  profile_photo: string | null;
  apartment_address: string;
  monthly_rent: number;
  birth_date: string;
  interests: string[] | null;
  apartment_photos: string[] | null;
  apartment_description?: string;
  amenities?: string[] | null;
  house_rules?: string[] | null;
  status: "active" | "paused" | "vacation" | "matchmaking";
}

export default async function ElderPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.app_metadata?.role !== "elder") {
    redirect("/");
  }

  const { data: elder, error: elderError } = await supabase
    .from("elders")
    .select("*")
    .eq("id", user.id)
    .single();

  if (elderError || !elder) {
    return <div>Error fetching data: {elderError?.message}</div>;
  }

  return <ElderProfile elder={elder} user={{ ...user, email: user.email ?? "email_no_disponible@example.com" }} />;
}
