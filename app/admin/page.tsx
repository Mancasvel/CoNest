import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.app_metadata?.role !== "admin") {
    redirect("/");
  }

  let { data: admins, error: adminsError } = await supabase.from("admins").select("*");
  let { data: students, error: studentsError } = await supabase.from("students").select("*");
  let { data: elders, error: eldersError } = await supabase.from("elders").select("*");
  let { data: matches, error: matchesError } = await supabase.from("matches").select("*");

  if (adminsError || studentsError || eldersError || matchesError || students == null || elders == null || admins == null || matches == null) {
    return <div>Error fetching data: {adminsError?.message || studentsError?.message || eldersError?.message || matchesError?.message}</div>;
  }

  // Crear un mapa de IDs a nombres para los matches
  const studentMap = students.reduce((acc, student) => {
    acc[student.id] = student.nombre;
    return acc;
  }, {});

  const elderMap = elders.reduce((acc, elder) => {
    acc[elder.id] = elder.nombre;
    return acc;
  }, {});

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      {/* Lista de Administradores */}
      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4">Administrators List</h2>
        <div className="overflow-auto rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left p-3">ID</th>
                <th className="text-left p-3">User Email</th>
              </tr>
            </thead>
            <tbody>
              {admins.length > 0 ? (
                admins.map((a) => (
                  <tr key={a.id} className="border-b">
                    <td className="p-3">{a.id}</td>
                    <td className="p-3">{a.id}</td> {/* Aquí podrías hacer una consulta extra para obtener más info si fuera necesario */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-3 text-center">No administrators found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lista de Estudiantes */}
      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4">Students List</h2>
        <div className="overflow-auto rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">University</th>
                <th className="text-left p-3">Course</th>
                <th className="text-left p-3">Birth Date</th>
                <th className="text-left p-3">Interests</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((s) => (
                  <tr key={s.id} className="border-b">
                    <td className="p-3">{s.nombre}</td>
                    <td className="p-3">{s.university}</td>
                    <td className="p-3">{s.course}</td>
                    <td className="p-3">{new Date(s.birth_date).toLocaleDateString()}</td>
                    <td className="p-3">{s.interests}</td>
                    <td className="p-3">{s.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-3 text-center">No students found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lista de Ancianos */}
      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4">Elders List</h2>
        <div className="overflow-auto rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Address</th>
                <th className="text-left p-3">Monthly Rent</th>
                <th className="text-left p-3">Interests</th>
                <th className="text-left p-3">Description</th>
                <th className="text-left p-3">Photos</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {elders.length > 0 ? (
                elders.map((e) => (
                  <tr key={e.id} className="border-b">
                    <td className="p-3">{e.nombre}</td>
                    <td className="p-3">{e.apartment_address}</td>
                    <td className="p-3">${e.monthly_rent}</td>
                    <td className="p-3">{e.interests}</td>
                    <td className="p-3">{e.apartment_description}</td>
                    <td className="p-3">{e.apartment_photos || "No photos"}</td>
                    <td className="p-3">{e.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-3 text-center">No elders found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lista de Matches */}
      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4">Matches List</h2>
        <div className="overflow-auto rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left p-3">Student</th>
                <th className="text-left p-3">Elder</th>
                <th className="text-left p-3">Creation Date</th>
              </tr>
            </thead>
            <tbody>
              {matches.length > 0 ? (
                matches.map((m) => (
                  <tr key={m.id} className="border-b">
                    <td className="p-3">{studentMap[m.student_id] || "Unknown"}</td>
                    <td className="p-3">{elderMap[m.elder_id] || "Unknown"}</td>
                    <td className="p-3">{new Date(m.created_at).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-3 text-center">No matches found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
