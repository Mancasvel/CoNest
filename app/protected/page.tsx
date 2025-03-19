import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Obtener la lista de usuarios y matches
  let { data: users, error: usersError } = await supabase.from("users").select("*");
  let { data: matches, error: matchesError } = await supabase.from("matches").select("*");

  if (usersError || matchesError) {
    return <div>Error fetching data: {usersError?.message || matchesError?.message}</div>;
  }

  // Crear un mapa de IDs a nombres para búsqueda rápida
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.nombre;
    return acc;
  }, {});

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4">User List</h2>
        <div className="overflow-auto rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left p-3">Nombre</th>
                <th className="text-left p-3">Email</th>
                <th className="text-left p-3">Rol</th>
              </tr>
            </thead>
            <tbody>
              {users && users.length > 0 ? (
                users.map((u) => (
                  <tr key={u.id} className="border-b">
                    <td className="p-3">{u.nombre}</td>
                    <td className="p-3">{u.email}</td>
                    <td className="p-3">{u.rol}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="p-3 text-center">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4">Matches List</h2>
        <div className="overflow-auto rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left p-3">Estudiante</th>
                <th className="text-left p-3">Anciano</th>
                <th className="text-left p-3">Fecha de Creación</th>
              </tr>
            </thead>
            <tbody>
              {matches && matches.length > 0 ? (
                matches.map((m) => (
                  <tr key={m.id} className="border-b">
                    <td className="p-3">{userMap[m.estudiante_id] || "Desconocido"}</td>
                    <td className="p-3">{userMap[m.anciano_id] || "Desconocido"}</td>
                    <td className="p-3">{new Date(m.created_at).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="p-3 text-center">No matches found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
