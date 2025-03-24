import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import StudentProfile from "./Student_profile";

// Definir tipos para las propiedades de `StudentPage`
interface User {
  email: string;
  app_metadata: {
    role: string;
  };
}

interface Student {
  profile_photo: string | null;
  university: string;
  course: string;
  birth_date: string;
  interests: string[] | null;
  status: "active" | "paused" | "vacation";
}

export default async function StudentPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.app_metadata?.role !== "student") {
    redirect("/");
  }

  const { data: student, error: studentError } = await supabase
    .from<Student>("students")
    .select("*")
    .eq("id", user.id)
    .single();

  if (studentError || !student) {
    return <div>Error fetching data: {studentError?.message}</div>;
  }

  return <StudentProfile student={student} user={user} />;
}
