import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import StudentProfile from "./student-profile";


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

  const userWithEmail = { ...user, email: user.email || "" };
  return <StudentProfile student={student} user={userWithEmail} />;
}
