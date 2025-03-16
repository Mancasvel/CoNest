"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { UserType } from "@/types/supabase"
import { Home, GraduationCap } from "lucide-react"

interface UserTypeSelectorProps {
  userId: string
}

export function UserTypeSelector({ userId }: UserTypeSelectorProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleTypeSelection(type: UserType) {
    try {
      setIsLoading(true)
      setError(null)

      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          user_type: type,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId)

      if (updateError) throw updateError

      router.push("/onboarding")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al seleccionar el tipo de usuario")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <button
        onClick={() => handleTypeSelection("host")}
        disabled={isLoading}
        className="relative flex flex-col items-center p-6 rounded-lg border-2 border-muted hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Home className="h-12 w-12 mb-4" />
        <h3 className="text-lg font-semibold">Anfitrión</h3>
        <p className="text-sm text-muted-foreground text-center mt-2">
          Tengo una habitación disponible y me gustaría compartir mi hogar con un estudiante.
        </p>
      </button>

      <button
        onClick={() => handleTypeSelection("student")}
        disabled={isLoading}
        className="relative flex flex-col items-center p-6 rounded-lg border-2 border-muted hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <GraduationCap className="h-12 w-12 mb-4" />
        <h3 className="text-lg font-semibold">Estudiante</h3>
        <p className="text-sm text-muted-foreground text-center mt-2">
          Soy estudiante y busco un hogar donde vivir mientras estudio.
        </p>
      </button>

      {error && (
        <div className="col-span-2">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      )}
    </div>
  )
} 