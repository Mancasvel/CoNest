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

    <div className="flex-1 w-full flex flex-col gap-12">

      {/* Lista de Estudiantes */}
      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4">Students List</h2>
        <div className="overflow-auto rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Profile Photo</th>
                <th className="text-left p-3">University</th>
                <th className="text-left p-3">Course</th>
                <th className="text-left p-3">Birth Date</th>
                <th className="text-left p-3">Interests</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id} className="border-b">
                  <td className="p-3">{s.nombre}</td>
                  <td className="p-3">
                    {s.profile_photo ? <img src={s.profile_photo} alt="Profile" className="w-10 h-10 rounded-full" /> : "No photo"}
                  </td>
                  <td className="p-3">{s.university}</td>
                  <td className="p-3">{s.course}</td>
                  <td className="p-3">{new Date(s.birth_date).toLocaleDateString()}</td>
                  <td className="p-3">{s.interests?.join(", ")}</td>
                  <td className="p-3">{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lista de Ancianos */}
      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4">Elders List</h2>
        {/* Botón que lleva a la URL /admin/registrar-mayor */}
        <a href="/admin/registrar-mayor">
                      <button className="px-4 py-2 bg-conest-blue text-white rounded-lg hover:bg-conest-mediumBlue transition-all duration-200">
                        Registrar Mayor
                      </button>
                    </a>
        <div className="overflow-auto rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Profile Photo</th>
                <th className="text-left p-3">Address</th>
                <th className="text-left p-3">Monthly Rent</th>
                <th className="text-left p-3">Interests</th>
                <th className="text-left p-3">Apartment Photos</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {elders.map((e) => (
                <tr key={e.id} className="border-b">
                  <td className="p-3">{e.nombre}</td>
                  <td className="p-3">
                    {e.profile_photo ? <img src={e.profile_photo} alt="Profile" className="w-10 h-10 rounded-full" /> : "No photo"}
                  </td>
                  <td className="p-3">{e.apartment_address}</td>
                  <td className="p-3">${e.monthly_rent}</td>
                  <td className="p-3">{e.interests?.join(", ")}</td>
                  <td className="p-3">
                    {e.apartment_photos?.length ? e.apartment_photos.map((photo: string | undefined, idx: Key | null | undefined) => <img key={idx} src={photo} alt="Apartment" className="w-10 h-10 rounded" />) : "No photos"}
                  </td>
                  <td className="p-3">{e.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
