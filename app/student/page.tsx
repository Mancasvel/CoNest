import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import StudentProfile from "./Student_profile";


export default async function StudentPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser() ;

  if (!user || user.app_metadata?.role !== "student" || !user.email) {
    redirect("/");
  }

  let { data: student, error: studentError } = await supabase
    .from("students")
    .select("*")
    .eq("id", user.id)
    .single();


  if (studentError || student == null) {
    return <div>Error fetching data: {studentError?.message}</div>;
  }

  // Asegurar que el email no es undefined antes de pasar al componente
  const userWithEmail = { ...user, email: user.email || "" };  // Aseguramos que `email` siempre sea un string

  return <StudentProfile student={student} user={userWithEmail} />;
}
