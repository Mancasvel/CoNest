"use client"

import { useState, useEffect } from "react"
import { format, addDays, isBefore, isAfter } from "date-fns"
import { es } from "date-fns/locale"
import { Database } from "@/types/supabase"
import { supabase } from "@/lib/supabase"
import { AlertTriangle, Clock } from "lucide-react"

type Payment = Database["public"]["Tables"]["payments"]["Row"]

interface PaymentNotificationsProps {
  contractId: string
}

export function PaymentNotifications({ contractId }: PaymentNotificationsProps) {
  const [upcomingPayments, setUpcomingPayments] = useState<Payment[]>([])
  const [overduePayments, setOverduePayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPayments()
  }, [contractId])

  async function loadPayments() {
    try {
      setLoading(true)

      const { data: payments, error } = await supabase
        .from("payments")
        .select("*")
        .eq("contract_id", contractId)
        .eq("status", "pending")
        .order("due_date", { ascending: true })

      if (error) throw error

      const now = new Date()
      const upcoming = payments.filter((payment) => {
        const dueDate = new Date(payment.due_date)
        return (
          isAfter(dueDate, now) && isBefore(dueDate, addDays(now, 7))
        )
      })

      const overdue = payments.filter((payment) => {
        const dueDate = new Date(payment.due_date)
        return isBefore(dueDate, now)
      })

      setUpcomingPayments(upcoming)
      setOverduePayments(overdue)
    } catch (err) {
      console.error("Error loading payments:", err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return null
  }

  if (upcomingPayments.length === 0 && overduePayments.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {overduePayments.length > 0 && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Pagos vencidos
              </h3>
              <div className="mt-2">
                <ul className="list-inside list-disc space-y-1">
                  {overduePayments.map((payment) => (
                    <li key={payment.id} className="text-sm text-red-700">
                      Pago de ${payment.amount.toLocaleString("es-MX", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      MXN vencido el{" "}
                      {format(new Date(payment.due_date), "PPP", {
                        locale: es,
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {upcomingPayments.length > 0 && (
        <div className="rounded-md bg-yellow-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Clock className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Pagos próximos
              </h3>
              <div className="mt-2">
                <ul className="list-inside list-disc space-y-1">
                  {upcomingPayments.map((payment) => (
                    <li key={payment.id} className="text-sm text-yellow-700">
                      Pago de ${payment.amount.toLocaleString("es-MX", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      MXN para el{" "}
                      {format(new Date(payment.due_date), "PPP", {
                        locale: es,
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 