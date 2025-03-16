import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import { OnboardingForm } from "@/components/onboarding/onboarding-form"

export default async function OnboardingPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  // Obtener el perfil del usuario
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single()

  // Si el usuario ya completó el onboarding, redirigir al dashboard
  if (profile?.bio && profile?.preferences) {
    redirect("/dashboard")
  }

  // Si el usuario no tiene un tipo definido, redirigir a la selección de tipo
  if (!profile?.user_type) {
    redirect("/user-type")
  }

  return (
    <div className="container max-w-2xl py-8">
      <OnboardingForm userId={session.user.id} userType={profile.user_type} />
    </div>
  )
} 