import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ElderProfile from "./Elder_profile";
import { User } from "@supabase/supabase-js";


type Elder = {
  id: string;

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
  } = await supabase.auth.getUser() ;

  if (!user || user.user_metadata?.role !== "elder") {
    redirect("/");

  }

  // Obtener los datos específicos del elder desde la tabla elders
  const { data: elder, error: elderError } = await supabase
    .from("elders")
    .select("*")
    .eq("id", user.id)
    .single();

  if (elderError || !elder) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-conest-darkGray mb-4">Error al cargar el perfil</h2>
          <p className="text-conest-darkGray/70">{elderError?.message || "No se encontraron datos para este usuario"}</p>

        </div>
      </div>
    );
  }
  return <ElderProfile elder={elder} user={{ ...user, email: user.email ?? "email_no_disponible@example.com" }} />;

}
