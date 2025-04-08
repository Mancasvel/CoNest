"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

// Define the type for the elder profile data
interface ElderProfileData {
    profile_photo: string | null
    apartment_address: string
    apartment_description: string | null
    monthly_rent: number
    birth_date: string
    interests: string[] | null
    apartment_photos: string[] | null
}

export async function updateElderProfile(elderId: string, profileData: ElderProfileData) {
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
        if (user.id !== elderId) {
            return { success: false, error: "No tienes permiso para actualizar este perfil" }
        }

        // Update the elder profile in the database
        const { error: updateError } = await supabase
            .from("elders")
            .update({
                profile_photo: profileData.profile_photo,
                apartment_address: profileData.apartment_address,
                apartment_description: profileData.apartment_description,
                monthly_rent: profileData.monthly_rent,
                birth_date: profileData.birth_date,
                interests: profileData.interests,
                apartment_photos: profileData.apartment_photos,
            })
            .eq("id", elderId)

        if (updateError) {
            console.error("Error updating elder profile:", updateError)
            return { success: false, error: updateError.message }
        }

        // Revalidate the path to refresh the data
        revalidatePath("/elder")

        return { success: true }
    } catch (error) {
        console.error("Error in updateElderProfile:", error)
        return {
            success: false,
            error: error instanceof Error ? error.message : "Error desconocido al actualizar el perfil",
        }
    }
}

