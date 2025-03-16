"use client"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Database } from "@/types/supabase"
import { supabase } from "@/lib/supabase"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

type MatchingPayment = Database["public"]["Tables"]["matching_payments"]["Row"]

interface UseStripePaymentProps {
  onSuccess?: (payment: MatchingPayment) => void
  onError?: (error: Error) => void
}

export function useStripePayment({ onSuccess, onError }: UseStripePaymentProps = {}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handlePayment(amount: number) {
    try {
      setLoading(true)
      setError(null)

      const user = (await supabase.auth.getUser()).data.user
      if (!user) throw new Error("Usuario no autenticado")

      // Insertar el registro de pago en Supabase
      const { data: payment, error: insertError } = await supabase
        .from("matching_payments")
        .insert([
          {
            amount,
            user_id: user.id,
            status: "pending",
          },
        ])
        .select()
        .single()

      if (insertError) throw insertError

      // Actualizar el estado del pago a completado
      const { data: updatedPayment, error: updateError } = await supabase
        .from("matching_payments")
        .update({ status: "completed" })
        .eq("id", payment.id)
        .select()
        .single()

      if (updateError) throw updateError

      // Actualizar el perfil del usuario
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          has_paid: true,
          payment_id: payment.id,
        })
        .eq("id", user.id)

      if (profileError) throw profileError

      onSuccess?.(updatedPayment)
      return updatedPayment
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Error desconocido")
      setError(error.message)
      onError?.(error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return {
    handlePayment,
    loading,
    error,
  }
} 