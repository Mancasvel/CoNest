import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import { SwipeContainer } from "@/components/matching/swipe-container"

export default async function MatchingPage() {
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

  // Si el usuario no ha completado el onboarding, redirigir
  if (!profile?.bio || !profile?.preferences) {
    redirect("/onboarding")
  }

  return (
    <div className="container max-w-lg py-8">
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-bold">Encuentra tu match perfecto</h1>
        <p className="text-muted-foreground">
          {profile.user_type === "host"
            ? "Desliza para encontrar estudiantes que se ajusten a tus necesidades"
            : "Desliza para encontrar un hogar acogedor donde vivir"}
        </p>
      </div>

      <SwipeContainer userId={session.user.id} userType={profile.user_type} />
    </div>
  )
} 