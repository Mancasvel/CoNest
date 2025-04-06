"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

// Define the type for the student profile data
interface StudentProfileData {
  university: string
  course: string
  birth_date: string
  interests: string[] | null
  profile_photo?: string | null
}

export async function updateStudentProfile(studentId: string, profileData: StudentProfileData) {
  try {
    const supabase = await createClient()

    // Check if the user is authenticated
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return { success: false, error: "No estás autenticado" }
    }

    // Verify that the authenticated user is updating their own profile
    if (user.id !== studentId) {
      return { success: false, error: "No tienes permiso para actualizar este perfil" }
    }

    // Update the student profile in the database
    const { error: updateError } = await supabase
      .from("students")
      .update({
        university: profileData.university,
        course: profileData.course,
        birth_date: profileData.birth_date,
        interests: profileData.interests,
        profile_photo: profileData.profile_photo,
      })
      .eq("id", studentId)

    if (updateError) {
      console.error("Error updating student profile:", updateError)
      return { success: false, error: updateError.message }
    }

    // Revalidate the path to refresh the data
    revalidatePath("/student")

    return { success: true }
  } catch (error) {
    console.error("Error in updateStudentProfile:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido al actualizar el perfil",
    }
  }
}

