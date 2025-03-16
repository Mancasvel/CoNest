"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { supabase } from "@/lib/supabase"
import { ActivitySelector } from "./activity-selector"
import { AvatarUpload } from "./avatar-upload"
import { UserType } from "@/types/supabase"

const formSchema = z.object({
  bio: z.string().min(10, {
    message: "La bio debe tener al menos 10 caracteres.",
  }).max(300, {
    message: "La bio no puede tener más de 300 caracteres.",
  }),
  location: z.string().min(2, {
    message: "Por favor ingresa una ubicación válida.",
  }),
  dateOfBirth: z.string().min(1, {
    message: "Por favor ingresa tu fecha de nacimiento.",
  }),
  phoneNumber: z.string().min(9, {
    message: "Por favor ingresa un número de teléfono válido.",
  }),
  emergencyContact: z.string().min(9, {
    message: "Por favor ingresa un contacto de emergencia.",
  }),
  // Campos específicos para estudiantes
  studyField: z.string().optional(),
  university: z.string().optional(),
  // Campos específicos para anfitriones
  petsAllowed: z.boolean().optional(),
  smokingAllowed: z.boolean().optional(),
})

interface OnboardingFormProps {
  userId: string
  userType: UserType
}

export function OnboardingForm({ userId, userType }: OnboardingFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [selectedHelp, setSelectedHelp] = useState<string[]>([])
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
      location: "",
      dateOfBirth: "",
      phoneNumber: "",
      emergencyContact: "",
      studyField: "",
      university: "",
      petsAllowed: false,
      smokingAllowed: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (selectedActivities.length === 0) {
      setError("Por favor selecciona al menos una actividad")
      return
    }

    if (userType === "host" && selectedHelp.length === 0) {
      setError("Por favor selecciona al menos un tipo de ayuda necesaria")
      return
    }

    try {
      setIsLoading(true)
      setError(null)

      const preferences = {
        schedule: [],
        pets_allowed: values.petsAllowed || false,
        smoking_allowed: values.smokingAllowed || false,
        activities: selectedActivities,
        ...(userType === "host" && { help_needed: selectedHelp }),
        ...(userType === "student" && {
          study_field: values.studyField,
          university: values.university,
        }),
      }

      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          bio: values.bio,
          location: values.location,
          date_of_birth: values.dateOfBirth,
          phone_number: values.phoneNumber,
          emergency_contact: values.emergencyContact,
          avatar_url: avatarUrl,
          preferences,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId)

      if (updateError) throw updateError

      router.push("/dashboard")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al actualizar el perfil")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">
          {userType === "host" 
            ? "Completa tu perfil de anfitrión"
            : "Completa tu perfil de estudiante"
          }
        </h2>
        <p className="text-muted-foreground">
          {userType === "host"
            ? "Ayúdanos a encontrar el estudiante ideal para compartir tu hogar"
            : "Ayúdanos a encontrar el hogar perfecto para ti"
          }
        </p>
      </div>

      <AvatarUpload
        userId={userId}
        onUploadComplete={setAvatarUrl}
        currentAvatarUrl={avatarUrl}
      />

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="bio"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Biografía
            </label>
            <textarea
              id="bio"
              {...form.register("bio")}
              className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder={userType === "host" 
                ? "Cuéntanos sobre ti, tu hogar y qué tipo de compañía buscas..."
                : "Cuéntanos sobre ti, tus estudios y qué puedes aportar..."
              }
              disabled={isLoading}
            />
            {form.formState.errors.bio && (
              <p className="text-sm text-red-500">{form.formState.errors.bio.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="location"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ubicación
              </label>
              <input
                id="location"
                {...form.register("location")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Ciudad, País"
                disabled={isLoading}
              />
              {form.formState.errors.location && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.location.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="dateOfBirth"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Fecha de nacimiento
              </label>
              <input
                id="dateOfBirth"
                type="date"
                {...form.register("dateOfBirth")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isLoading}
              />
              {form.formState.errors.dateOfBirth && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.dateOfBirth.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Teléfono
              </label>
              <input
                id="phoneNumber"
                type="tel"
                {...form.register("phoneNumber")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="+34 600000000"
                disabled={isLoading}
              />
              {form.formState.errors.phoneNumber && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="emergencyContact"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Contacto de emergencia
              </label>
              <input
                id="emergencyContact"
                {...form.register("emergencyContact")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Nombre y teléfono"
                disabled={isLoading}
              />
              {form.formState.errors.emergencyContact && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.emergencyContact.message}
                </p>
              )}
            </div>
          </div>

          {userType === "student" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="studyField"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Campo de estudio
                </label>
                <input
                  id="studyField"
                  {...form.register("studyField")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Ej: Medicina, Ingeniería..."
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="university"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Universidad
                </label>
                <input
                  id="university"
                  {...form.register("university")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Nombre de la universidad"
                  disabled={isLoading}
                />
              </div>
            </div>
          )}

          {userType === "host" && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Preferencias del hogar
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="petsAllowed"
                    {...form.register("petsAllowed")}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="petsAllowed" className="text-sm">
                    Mascotas permitidas
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="smokingAllowed"
                    {...form.register("smokingAllowed")}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="smokingAllowed" className="text-sm">
                    Fumar permitido
                  </label>
                </div>
              </div>
            </div>
          )}

          <ActivitySelector
            userType={userType}
            selectedActivities={selectedActivities}
            selectedHelp={selectedHelp}
            onActivityChange={setSelectedActivities}
            onHelpChange={userType === "host" ? setSelectedHelp : undefined}
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? "Guardando..." : "Completar perfil"}
        </button>
      </form>
    </div>
  )
} 