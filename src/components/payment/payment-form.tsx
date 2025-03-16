"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { useStripePayment } from "@/hooks/use-stripe-payment"
import { Database } from "@/types/supabase"

type MatchingPayment = Database["public"]["Tables"]["matching_payments"]["Row"]

const MATCHING_FEE = 999 // $9.99 USD
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function PaymentFormContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const matchId = searchParams.get("match_id")
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { handlePayment } = useStripePayment({
    onSuccess: (payment) => {
      // Redirigir a la página de creación de contrato con el match_id
      if (matchId) {
        router.push(`/contracts/create?match_id=${matchId}`)
      } else {
        router.push("/contracts/create")
      }
    },
    onError: (error) => {
      setError(error.message)
      setLoading(false)
    },
  })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!stripe || !elements) return

    try {
      setError(null)
      setLoading(true)

      const { error: submitError } = await elements.submit()
      if (submitError) {
        setError(submitError.message || "Error al procesar el pago")
        setLoading(false)
        return
      }

      await handlePayment(MATCHING_FEE)
    } catch (err) {
      console.error("Error processing payment:", err)
      setError("Error al procesar el pago")
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md space-y-6 rounded-lg border bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-lg font-medium">Pago del servicio de contratos</h2>
        <p className="mt-1 text-sm text-gray-500">
          Para formalizar tu contrato, es necesario realizar un pago único de ${(MATCHING_FEE / 100).toFixed(2)} MXN.
        </p>
      </div>

      <PaymentElement />

      {error && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || !stripe || !elements}
        className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        {loading ? "Procesando pago..." : "Pagar y continuar"}
      </button>

      <p className="text-center text-xs text-gray-500">
        Los pagos son procesados de forma segura por Stripe. No almacenamos
        información de tarjetas.
      </p>
    </form>
  )
}

export function PaymentForm() {
  const [clientSecret, setClientSecret] = useState<string>()

  useEffect(() => {
    // Obtener el client secret al montar el componente
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: MATCHING_FEE }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.error("Error fetching client secret:", err))
  }, [])

  if (!clientSecret) {
    return <div>Cargando...</div>
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "stripe",
        },
      }}
    >
      <PaymentFormContent />
    </Elements>
  )
} 