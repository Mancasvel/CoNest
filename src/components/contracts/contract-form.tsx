"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Database } from "@/types/supabase"
import { supabase } from "@/lib/supabase"

type Contract = Database["public"]["Tables"]["contracts"]["Insert"]

const contractSchema = z.object({
  start_date: z.string().min(1, "La fecha de inicio es requerida"),
  end_date: z.string().min(1, "La fecha de fin es requerida"),
  monthly_rent: z.number().min(1, "El monto debe ser mayor a 0"),
  services_included: z.array(z.string()),
  student_responsibilities: z.array(z.string()),
  additional_terms: z.string().optional(),
})

const commonServices = [
  "Internet",
  "Agua",
  "Luz",
  "Gas",
  "Limpieza de áreas comunes",
  "Lavandería",
]

const commonResponsibilities = [
  "Mantener limpia la habitación",
  "Respetar horarios de silencio",
  "Avisar con anticipación ausencias prolongadas",
  "Ayudar con compras básicas",
  "Acompañamiento en actividades",
  "Asistencia con tecnología",
]

interface ContractFormProps {
  matchId: string
  hostId: string
  studentId: string
  onSuccess: (contract: Contract) => void
}

export function ContractForm({
  matchId,
  hostId,
  studentId,
  onSuccess,
}: ContractFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof contractSchema>>({
    resolver: zodResolver(contractSchema),
    defaultValues: {
      services_included: [],
      student_responsibilities: [],
      additional_terms: "",
    },
  })

  async function onSubmit(values: z.infer<typeof contractSchema>) {
    try {
      setLoading(true)
      setError(null)

      const contract: Contract = {
        match_id: matchId,
        host_id: hostId,
        student_id: studentId,
        ...values,
      }

      const { error: insertError } = await supabase
        .from("contracts")
        .insert([contract])

      if (insertError) throw insertError

      onSuccess(contract)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al crear el contrato")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium">Fecha de inicio</label>
            <input
              type="date"
              {...form.register("start_date")}
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
            {form.formState.errors.start_date && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.start_date.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium">Fecha de fin</label>
            <input
              type="date"
              {...form.register("end_date")}
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
            {form.formState.errors.end_date && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.end_date.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Renta mensual</label>
          <input
            type="number"
            {...form.register("monthly_rent", { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border px-3 py-2"
            placeholder="0.00"
            step="0.01"
          />
          {form.formState.errors.monthly_rent && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.monthly_rent.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Servicios incluidos</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {commonServices.map((service) => (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={service}
                  {...form.register("services_included")}
                  className="rounded border-gray-300"
                />
                <span className="text-sm">{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Responsabilidades del estudiante</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {commonResponsibilities.map((responsibility) => (
              <label key={responsibility} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={responsibility}
                  {...form.register("student_responsibilities")}
                  className="rounded border-gray-300"
                />
                <span className="text-sm">{responsibility}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Términos adicionales</label>
          <textarea
            {...form.register("additional_terms")}
            className="mt-1 block w-full rounded-md border px-3 py-2"
            rows={4}
            placeholder="Ingresa cualquier término adicional del contrato..."
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? "Creando contrato..." : "Crear contrato"}
        </button>
      </div>
    </form>
  )
} 