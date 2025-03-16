"use client"

import { useState, useEffect } from "react"
import { format, addMonths, isBefore } from "date-fns"
import { es } from "date-fns/locale"
import { Database } from "@/types/supabase"
import { supabase } from "@/lib/supabase"

type Payment = Database["public"]["Tables"]["payments"]["Row"]
type Contract = Database["public"]["Tables"]["contracts"]["Row"]

interface PaymentListProps {
  contract: Contract
  isHost: boolean
}

export function PaymentList({ contract, isHost }: PaymentListProps) {
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadPayments()
  }, [contract.id])

  async function loadPayments() {
    try {
      setLoading(true)
      setError(null)

      const { data: paymentsData, error: paymentsError } = await supabase
        .from("payments")
        .select("*")
        .eq("contract_id", contract.id)
        .order("due_date", { ascending: true })

      if (paymentsError) throw paymentsError

      setPayments(paymentsData)

      // Si no hay pagos y el contrato está activo, generar pagos mensuales
      if (paymentsData.length === 0 && contract.status === "active" && isHost) {
        await generateMonthlyPayments()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar pagos")
    } finally {
      setLoading(false)
    }
  }

  async function generateMonthlyPayments() {
    try {
      const startDate = new Date(contract.start_date)
      const endDate = new Date(contract.end_date)
      const payments = []

      let currentDate = startDate
      while (isBefore(currentDate, endDate)) {
        payments.push({
          contract_id: contract.id,
          amount: contract.monthly_rent,
          due_date: format(currentDate, "yyyy-MM-dd"),
          status: "pending",
        })
        currentDate = addMonths(currentDate, 1)
      }

      const { error: insertError } = await supabase
        .from("payments")
        .insert(payments)

      if (insertError) throw insertError

      loadPayments()
    } catch (err) {
      console.error("Error generating payments:", err)
    }
  }

  async function handlePaymentUpdate(payment: Payment, newStatus: string) {
    try {
      const { error: updateError } = await supabase
        .from("payments")
        .update({
          status: newStatus,
          paid_date: newStatus === "paid" ? new Date().toISOString() : null,
        })
        .eq("id", payment.id)

      if (updateError) throw updateError

      loadPayments()
    } catch (err) {
      console.error("Error updating payment:", err)
    }
  }

  if (loading) {
    return <div className="text-center">Cargando pagos...</div>
  }

  if (error) {
    return (
      <div className="rounded-md bg-red-50 p-4 text-red-700">{error}</div>
    )
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Pagos mensuales</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Fecha de pago
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Monto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Estado
              </th>
              {isHost && (
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Acciones
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="whitespace-nowrap px-6 py-4">
                  {format(new Date(payment.due_date), "PPP", { locale: es })}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  ${payment.amount.toLocaleString("es-MX", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })} MXN
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      payment.status === "paid"
                        ? "bg-green-100 text-green-800"
                        : payment.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {payment.status === "paid" && "Pagado"}
                    {payment.status === "pending" && "Pendiente"}
                    {payment.status === "overdue" && "Vencido"}
                  </span>
                </td>
                {isHost && (
                  <td className="whitespace-nowrap px-6 py-4">
                    {payment.status !== "paid" ? (
                      <button
                        onClick={() => handlePaymentUpdate(payment, "paid")}
                        className="text-sm font-medium text-primary hover:text-primary/80"
                      >
                        Marcar como pagado
                      </button>
                    ) : (
                      <button
                        onClick={() => handlePaymentUpdate(payment, "pending")}
                        className="text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        Deshacer pago
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 