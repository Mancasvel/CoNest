"use client"

import { useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Database } from "@/types/supabase"
import { supabase } from "@/lib/supabase"
import { PaymentList } from "./payment-list"
import { PaymentSummary } from "./payment-summary"
import { PaymentNotifications } from "./payment-notifications"

type Contract = Database["public"]["Tables"]["contracts"]["Row"]
type ContractStatus = Contract["status"]

interface ContractDetailsProps {
  contract: Contract
  userRole: "host" | "student"
  onStatusChange?: (newStatus: ContractStatus) => void
}

export function ContractDetails({
  contract,
  userRole,
  onStatusChange,
}: ContractDetailsProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canSign = !contract[`${userRole}_signed`]
  const otherRole = userRole === "host" ? "student" : "host"
  const otherSigned = contract[`${otherRole}_signed`]

  async function handleSign() {
    try {
      setLoading(true)
      setError(null)

      const { error: updateError } = await supabase
        .from("contracts")
        .update({
          [`${userRole}_signed`]: true,
          [`${userRole}_signed_at`]: new Date().toISOString(),
          status: otherSigned ? "active" : "pending",
        })
        .eq("id", contract.id)

      if (updateError) throw updateError

      if (onStatusChange) {
        onStatusChange(otherSigned ? "active" : "pending")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al firmar el contrato")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Fecha de inicio</h3>
            <p className="mt-1">
              {format(new Date(contract.start_date), "PPP", { locale: es })}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Fecha de fin</h3>
            <p className="mt-1">
              {format(new Date(contract.end_date), "PPP", { locale: es })}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Renta mensual</h3>
          <p className="mt-1">
            ${contract.monthly_rent.toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} MXN
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">
            Servicios incluidos
          </h3>
          <ul className="mt-1 list-inside list-disc">
            {contract.services_included.map((service) => (
              <li key={service} className="text-sm">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">
            Responsabilidades del estudiante
          </h3>
          <ul className="mt-1 list-inside list-disc">
            {contract.student_responsibilities.map((responsibility) => (
              <li key={responsibility} className="text-sm">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        {contract.additional_terms && (
          <div>
            <h3 className="text-sm font-medium text-gray-500">
              Términos adicionales
            </h3>
            <p className="mt-1 whitespace-pre-wrap text-sm">
              {contract.additional_terms}
            </p>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">
              Estado del contrato
            </h3>
            <p className="mt-1">
              {contract.status === "pending" && "Pendiente de firmas"}
              {contract.status === "active" && "Activo"}
              {contract.status === "completed" && "Completado"}
              {contract.status === "cancelled" && "Cancelado"}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Firmas</h3>
            <div className="mt-2 space-y-2">
              <p className="text-sm">
                Anfitrión:{" "}
                {contract.host_signed_at
                  ? format(new Date(contract.host_signed_at), "PPP", {
                      locale: es,
                    })
                  : "Pendiente"}
              </p>
              <p className="text-sm">
                Estudiante:{" "}
                {contract.student_signed_at
                  ? format(new Date(contract.student_signed_at), "PPP", {
                      locale: es,
                    })
                  : "Pendiente"}
              </p>
            </div>
          </div>

          {canSign && contract.status === "pending" && (
            <div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                onClick={handleSign}
                disabled={loading}
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {loading ? "Firmando..." : "Firmar contrato"}
              </button>
            </div>
          )}
        </div>
      </div>

      {contract.status === "active" && (
        <>
          <PaymentNotifications contractId={contract.id} />
          <PaymentSummary contractId={contract.id} />
          <PaymentList contract={contract} isHost={userRole === "host"} />
        </>
      )}
    </div>
  )
} 