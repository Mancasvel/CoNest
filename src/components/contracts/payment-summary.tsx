"use client"

import { useState, useEffect } from "react"
import { Database } from "@/types/supabase"
import { supabase } from "@/lib/supabase"

type Payment = Database["public"]["Tables"]["payments"]["Row"]

interface PaymentSummaryProps {
  contractId: string
}

interface PaymentStats {
  total: number
  paid: number
  pending: number
  overdue: number
  totalAmount: number
  paidAmount: number
  pendingAmount: number
  overdueAmount: number
}

export function PaymentSummary({ contractId }: PaymentSummaryProps) {
  const [stats, setStats] = useState<PaymentStats>({
    total: 0,
    paid: 0,
    pending: 0,
    overdue: 0,
    totalAmount: 0,
    paidAmount: 0,
    pendingAmount: 0,
    overdueAmount: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPaymentStats()
  }, [contractId])

  async function loadPaymentStats() {
    try {
      setLoading(true)

      const { data: payments, error } = await supabase
        .from("payments")
        .select("*")
        .eq("contract_id", contractId)

      if (error) throw error

      const newStats = payments.reduce(
        (acc: PaymentStats, payment: Payment) => {
          acc.total++
          acc.totalAmount += payment.amount

          switch (payment.status) {
            case "paid":
              acc.paid++
              acc.paidAmount += payment.amount
              break
            case "pending":
              acc.pending++
              acc.pendingAmount += payment.amount
              break
            case "overdue":
              acc.overdue++
              acc.overdueAmount += payment.amount
              break
          }

          return acc
        },
        {
          total: 0,
          paid: 0,
          pending: 0,
          overdue: 0,
          totalAmount: 0,
          paidAmount: 0,
          pendingAmount: 0,
          overdueAmount: 0,
        }
      )

      setStats(newStats)
    } catch (err) {
      console.error("Error loading payment stats:", err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center">Cargando estadísticas...</div>
  }

  return (
    <div className="rounded-lg border bg-white p-6">
      <h3 className="mb-4 text-lg font-medium">Resumen de pagos</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div>
          <p className="text-sm text-gray-500">Total de pagos</p>
          <p className="mt-1 text-2xl font-semibold">
            ${stats.totalAmount.toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="mt-1 text-sm text-gray-500">{stats.total} pagos</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Pagado</p>
          <p className="mt-1 text-2xl font-semibold text-green-600">
            ${stats.paidAmount.toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="mt-1 text-sm text-gray-500">{stats.paid} pagos</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Pendiente</p>
          <p className="mt-1 text-2xl font-semibold text-yellow-600">
            ${stats.pendingAmount.toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="mt-1 text-sm text-gray-500">{stats.pending} pagos</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Vencido</p>
          <p className="mt-1 text-2xl font-semibold text-red-600">
            ${stats.overdueAmount.toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="mt-1 text-sm text-gray-500">{stats.overdue} pagos</p>
        </div>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full bg-green-500"
          style={{
            width: `${(stats.paidAmount / stats.totalAmount) * 100}%`,
          }}
        />
      </div>
    </div>
  )
} 