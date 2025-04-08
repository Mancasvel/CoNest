import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ElderProfile from "./Elder_profile";


export default async function ElderPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser() ;

  if (!user) {
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
