"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Database } from "@/types/supabase"
import { supabase } from "@/lib/supabase"
import { SwipeCard } from "./swipe-card"
import { UserRoundSearch } from "lucide-react"

type Profile = Database["public"]["Tables"]["profiles"]["Row"]

interface SwipeContainerProps {
  userId: string
  userType: "host" | "student"
}

export function SwipeContainer({ userId, userType }: SwipeContainerProps) {
  const router = useRouter()
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [userProfile, setUserProfile] = useState<Profile | null>(null)

  useEffect(() => {
    loadUserProfile()
  }, [])

  async function loadUserProfile() {
    try {
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single()

      if (profileError) throw profileError
      setUserProfile(profile)
      loadProfiles(profile)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar el perfil")
    }
  }

  async function loadProfiles(currentUserProfile: Profile) {
    try {
      setLoading(true)
      setError(null)

      // Obtener perfiles del tipo opuesto que no hayan hecho match
      const { data: existingMatches } = await supabase
        .from("matches")
        .select("host_id, student_id")
        .or(`host_id.eq.${userId},student_id.eq.${userId}`)

      const matchedIds = existingMatches?.reduce((acc: string[], match) => {
        if (match.host_id !== userId) acc.push(match.host_id)
        if (match.student_id !== userId) acc.push(match.student_id)
        return acc
      }, []) || []

      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_type", userType === "host" ? "student" : "host")
        .not("id", "in", `(${matchedIds.join(",")})`)
        .not("id", "eq", userId)
        .gt("preferences", "null")
        .order("created_at", { ascending: false })

      if (profilesError) throw profilesError

      // Ordenar perfiles por compatibilidad
      const sortedProfiles = (profiles || []).sort((a, b) => {
        const scoreA = calculateCompatibilityScore(currentUserProfile, a)
        const scoreB = calculateCompatibilityScore(currentUserProfile, b)
        return scoreB - scoreA
      })

      setProfiles(sortedProfiles)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar perfiles")
    } finally {
      setLoading(false)
    }
  }

  async function handleSwipe(direction: "left" | "right") {
    const currentProfile = profiles[currentIndex]
    if (!currentProfile || !userProfile) return

    if (direction === "right") {
      try {
        const compatibilityScore = calculateCompatibilityScore(userProfile, currentProfile)
        const matchData = {
          host_id: userType === "host" ? userId : currentProfile.id,
          student_id: userType === "host" ? currentProfile.id : userId,
          status: "pending",
          compatibility_score: compatibilityScore,
        }

        const { error: matchError } = await supabase
          .from("matches")
          .insert([matchData])

        if (matchError) throw matchError

        // Si ambos han hecho match, crear una notificación
        const { data: existingMatch } = await supabase
          .from("matches")
          .select("*")
          .eq(userType === "host" ? "student_id" : "host_id", userId)
          .eq(userType === "host" ? "host_id" : "student_id", currentProfile.id)
          .single()

        if (existingMatch) {
          // TODO: Implementar notificaciones y chat
          console.log("¡Match mutuo!")
        }
      } catch (err) {
        console.error("Error al crear match:", err)
      }
    }

    setCurrentIndex((prev) => prev + 1)
  }

  function calculateCompatibilityScore(userProfile: Profile, otherProfile: Profile): number {
    let score = 0
    const weights = {
      activities: 0.4,
      location: 0.2,
      preferences: 0.2,
      helpNeeded: 0.2,
    }

    // Compatibilidad de actividades
    const userActivities = new Set(userProfile.preferences?.activities || [])
    const otherActivities = new Set(otherProfile.preferences?.activities || [])
    const commonActivities = new Set([...userActivities].filter(x => otherActivities.has(x)))
    const activitiesScore = commonActivities.size / Math.max(userActivities.size, otherActivities.size)
    score += activitiesScore * weights.activities

    // Compatibilidad de ubicación
    const locationScore = userProfile.location === otherProfile.location ? 1 : 0
    score += locationScore * weights.location

    // Compatibilidad de preferencias
    const preferencesScore = calculatePreferencesScore(userProfile, otherProfile)
    score += preferencesScore * weights.preferences

    // Compatibilidad de ayuda necesaria (solo para host-student)
    if (userProfile.user_type === "host" && otherProfile.user_type === "student") {
      const helpNeededScore = calculateHelpNeededScore(userProfile, otherProfile)
      score += helpNeededScore * weights.helpNeeded
    }

    return score
  }

  function calculatePreferencesScore(userProfile: Profile, otherProfile: Profile): number {
    let matches = 0
    let total = 0

    if (userProfile.preferences && otherProfile.preferences) {
      // Mascotas
      if (typeof userProfile.preferences.pets_allowed === "boolean") {
        total++
        if (userProfile.preferences.pets_allowed === otherProfile.preferences.pets_allowed) {
          matches++
        }
      }

      // Fumar
      if (typeof userProfile.preferences.smoking_allowed === "boolean") {
        total++
        if (userProfile.preferences.smoking_allowed === otherProfile.preferences.smoking_allowed) {
          matches++
        }
      }
    }

    return total > 0 ? matches / total : 0
  }

  function calculateHelpNeededScore(hostProfile: Profile, studentProfile: Profile): number {
    const helpNeeded = new Set(hostProfile.preferences?.help_needed || [])
    const studentActivities = new Set(studentProfile.preferences?.activities || [])
    const matchingHelp = new Set([...helpNeeded].filter(x => studentActivities.has(x)))
    return helpNeeded.size > 0 ? matchingHelp.size / helpNeeded.size : 0
  }

  if (loading) {
    return (
      <div className="flex h-[600px] items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          <p className="mt-4 text-muted-foreground">Cargando perfiles...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-[600px] items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
          <button
            onClick={() => userProfile && loadProfiles(userProfile)}
            className="mt-4 text-sm text-primary hover:underline"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    )
  }

  if (profiles.length === 0 || currentIndex >= profiles.length) {
    return (
      <div className="flex h-[600px] items-center justify-center">
        <div className="text-center">
          <UserRoundSearch className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No hay más perfiles</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Vuelve más tarde para encontrar nuevas conexiones
          </p>
          <button
            onClick={() => userProfile && loadProfiles(userProfile)}
            className="mt-4 text-sm text-primary hover:underline"
          >
            Actualizar perfiles
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-[600px]">
      {profiles
        .slice(currentIndex, currentIndex + 3)
        .reverse()
        .map((profile, index) => (
          <SwipeCard
            key={profile.id}
            profile={profile}
            active={index === 0}
            onSwipe={handleSwipe}
          />
        ))}
    </div>
  )
} 