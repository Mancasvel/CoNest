// app/admin/page.tsx (Componente de servidor)
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";  // Importa el cliente del servidor
import ClientComponent from "./client-component";

export default async function AdminPage() {
  const supabase = await createClient();  // Aquí se obtiene el cliente de Supabase desde el servidor

  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.user_metadata?.role !== "admin") {
    redirect("/");  // Redirige si no es admin
  }

  // Obtener los datos de los administradores, estudiantes y ancianos
  let { data: admins, error: adminsError } = await supabase.from("admins").select("*");
  let { data: students, error: studentsError } = await supabase.from("students").select("*");
  let { data: elders, error: eldersError } = await supabase.from("elders").select("*");
  let { data: matches, error: matchesError } = await supabase.from("matches").select("*");

  // Verifica si hay algún error
  if (adminsError || studentsError || eldersError || matchesError) {
    return <div>Error fetching data: {adminsError?.message || studentsError?.message || eldersError?.message || matchesError?.message}</div>;
  }

  // Devuelve los datos que se usarán en el componente del cliente
  return (
    <ClientComponent
      admins={admins || []}
      students={students || []}
      elders={elders || []}
      matches={matches || []}
    />
  );
}
