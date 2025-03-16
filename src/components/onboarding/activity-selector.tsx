"use client"

import { useState } from "react"
import { UserType } from "@/types/supabase"

const ACTIVITIES = [
  "Conversación y compañía",
  "Juegos de mesa",
  "Lectura compartida",
  "Paseos",
  "Jardinería",
  "Cocina",
  "Ver películas/TV",
  "Manualidades",
  "Ejercicio suave",
  "Música",
] as const

const HELP_NEEDED = [
  "Compras básicas",
  "Ayuda con tecnología",
  "Tareas domésticas ligeras",
  "Gestiones online",
  "Acompañamiento a citas",
  "Preparación de comidas sencillas",
  "Cuidado de plantas",
  "Organización del hogar",
  "Recordatorios de medicación",
  "Pasear mascotas",
] as const

interface ActivitySelectorProps {
  userType: UserType
  selectedActivities: string[]
  selectedHelp?: string[]
  onActivityChange: (activities: string[]) => void
  onHelpChange?: (help: string[]) => void
  maxSelections?: number
}

export function ActivitySelector({
  userType,
  selectedActivities,
  selectedHelp = [],
  onActivityChange,
  onHelpChange,
  maxSelections = 5,
}: ActivitySelectorProps) {
  const [error, setError] = useState<string | null>(null)

  const toggleItem = (
    item: string,
    selectedItems: string[],
    onChange: (items: string[]) => void
  ) => {
    if (selectedItems.includes(item)) {
      onChange(selectedItems.filter((i) => i !== item))
      setError(null)
    } else {
      if (selectedItems.length >= maxSelections) {
        setError(`Puedes seleccionar máximo ${maxSelections} opciones`)
        return
      }
      onChange([...selectedItems, item])
      setError(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Actividades de interés</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {ACTIVITIES.map((activity) => (
            <button
              key={activity}
              onClick={() => toggleItem(activity, selectedActivities, onActivityChange)}
              className={`p-3 text-sm rounded-lg transition-colors ${
                selectedActivities.includes(activity)
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
              type="button"
            >
              {activity}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Seleccionados: {selectedActivities.length} de {maxSelections}
        </p>
      </div>

      {userType === "host" && onHelpChange && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Ayuda necesaria</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {HELP_NEEDED.map((help) => (
              <button
                key={help}
                onClick={() => toggleItem(help, selectedHelp, onHelpChange)}
                className={`p-3 text-sm rounded-lg transition-colors ${
                  selectedHelp.includes(help)
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
                type="button"
              >
                {help}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Seleccionados: {selectedHelp.length} de {maxSelections}
          </p>
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
} 