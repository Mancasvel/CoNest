"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion"
import { Database } from "@/types/supabase"
import { Check, X, Home, GraduationCap, Calendar, MapPin } from "lucide-react"

type Profile = Database["public"]["Tables"]["profiles"]["Row"]

interface SwipeCardProps {
  profile: Profile
  onSwipe: (direction: "left" | "right") => void
  active: boolean
}

export function SwipeCard({ profile, onSwipe, active }: SwipeCardProps) {
  const [exitX, setExitX] = useState(0)
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const opacity = useTransform(x, [-200, -125, 0, 125, 200], [0, 1, 1, 1, 0])
  const background = useTransform(
    x,
    [-200, 0, 200],
    ["rgb(239 68 68 / 0.1)", "transparent", "rgb(34 197 94 / 0.1)"]
  )

  const cardRef = useRef<HTMLDivElement>(null)

  function calculateAge(dateOfBirth: string) {
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  function handleDragEnd(_: any, info: PanInfo) {
    if (Math.abs(info.offset.x) > 100) {
      setExitX(info.offset.x)
      onSwipe(info.offset.x > 0 ? "right" : "left")
    }
  }

  if (!active) {
    return null
  }

  return (
    <motion.div
      ref={cardRef}
      style={{
        x,
        rotate,
        opacity,
        background,
      }}
      drag={active ? "x" : false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      animate={{ x: exitX }}
      className="absolute w-full max-w-sm cursor-grab active:cursor-grabbing"
    >
      <div className="overflow-hidden rounded-xl bg-card text-card-foreground">
        <div className="relative h-96">
          <Image
            src={profile.avatar_url || "/images/default-avatar.png"}
            alt={profile.full_name || "Usuario"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 w-full p-6 text-white">
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-2xl font-semibold">{profile.full_name}</h3>
              <span className="text-xl">•</span>
              <span>{calculateAge(profile.date_of_birth!)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{profile.location}</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 p-6">
          <div className="flex items-center gap-2">
            {profile.user_type === "host" ? (
              <Home className="h-5 w-5 text-primary" />
            ) : (
              <GraduationCap className="h-5 w-5 text-primary" />
            )}
            <span className="font-medium">
              {profile.user_type === "host" ? "Anfitrión" : "Estudiante"}
            </span>
          </div>

          <p className="text-sm text-muted-foreground">{profile.bio}</p>

          {profile.user_type === "student" && profile.preferences?.study_field && (
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="text-sm">
                {profile.preferences.study_field} - {profile.preferences.university}
              </span>
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-medium">Actividades de interés</h4>
            <div className="flex flex-wrap gap-2">
              {profile.preferences?.activities.map((activity) => (
                <span
                  key={activity}
                  className="rounded-full bg-secondary px-3 py-1 text-xs"
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>

          {profile.user_type === "host" && profile.preferences?.help_needed && (
            <div className="space-y-2">
              <h4 className="font-medium">Ayuda necesaria</h4>
              <div className="flex flex-wrap gap-2">
                {profile.preferences.help_needed.map((help) => (
                  <span
                    key={help}
                    className="rounded-full bg-secondary px-3 py-1 text-xs"
                  >
                    {help}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-6">
        <button
          onClick={() => onSwipe("left")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
        >
          <X className="h-6 w-6 text-red-500" />
        </button>
        <button
          onClick={() => onSwipe("right")}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
        >
          <Check className="h-6 w-6 text-green-500" />
        </button>
      </div>
    </motion.div>
  )
} 