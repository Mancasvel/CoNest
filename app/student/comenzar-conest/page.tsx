import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function UnirsePage() {
  const supabase = await createClient();

  // Verificación de usuario y rol
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.app_metadata?.role !== "student") {
    redirect("/");
  }

  // Verificación de estado de estudiante
  let { data: student, error: studentError } = await supabase
    .from("students")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!student || student?.status !== "REGISTERED") {
    redirect("/student");
  }

  if (studentError || student == null) {
    return <div>Error al obtener los datos: {studentError?.message}</div>; // Manejo de errores de datos
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          ¡Accede a la funcionalidad de Matchmaking!
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Para acceder a la funcionalidad de matchmaking y encontrar un piso para
          convivir con una persona mayor, es necesario que realices el pago correspondiente.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
          >
            Pagar y Acceder
          </button>
        </div>
      </div>
    </div>
  );
}
