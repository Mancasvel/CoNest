"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

interface ProfileData {
  university: string
  course: string
  birth_date: string
  interests: string[] | null
  profile_photo: string | null
}

export async function updateStudentProfile(studentId: string, profileData: ProfileData) {
  try {
    const supabase = await createClient()

    const { error } = await supabase.from("students").update(profileData).eq("id", studentId)

    if (error) throw error

    // Revalidate the student profile page
    revalidatePath("/student")

    return { success: true }
  } catch (error: any) {
    console.error("Error updating student profile:", error)
    return { success: false, error: error.message }
  }
}

