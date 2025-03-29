import { createClient } from "@/utils/supabase/server";

export default async function StudentPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser() ;

  if (user == null) {
    return <div>No se ha encontrado su usuario</div>;
  }


  let { data: student, error: studentError } = await supabase.from("students").select("*").eq("id", user.id).single();

  if (studentError || student == null) {
    return <div>Error fetching data: {studentError?.message}</div>;
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      {/* Información del Estudiante Logueado */}
      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4">Student Profile</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Foto de perfil */}
          <div className="flex justify-center md:justify-start">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
              {student.profile_photo ? (
                <img
                  src={student.profile_photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex justify-center items-center text-gray-400">No photo</div>
              )}
            </div>
          </div>

          {/* Información del Estudiante */}
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <h3 className="font-semibold text-lg">Personal Information</h3>
                <div className="mt-2 text-gray-700">
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>University:</strong> {student.university}</p>
                  <p><strong>Course:</strong> {student.course}</p>
                  <p><strong>Birth Date:</strong> {new Date(student.birth_date).toLocaleDateString()}</p>
                  <p><strong>Interests:</strong> {student.interests?.join(", ") || "No interests listed"}</p>
                  <p><strong>Status:</strong> {student.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
