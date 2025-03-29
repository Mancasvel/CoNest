"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface CheckoutButtonProps {
  price: number
  userId: string
  productName?: string
}

export default function CheckoutButton({ price, userId, productName = "Subscription" }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCheckout = async () => {
    try {
      setLoading(true)

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price,
          userId,
          successUrl: `${window.location.origin}/payment-success`,
          cancelUrl: `${window.location.origin}/payment-cancelled`,
        }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      } else {
        throw new Error("No checkout URL returned")
      }
    } catch (error) {
      console.error("Error during checkout:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={handleCheckout} disabled={loading} className="w-full">
      {loading ? "Processing..." : `Pay $${price.toFixed(2)}`}
    </button>
  )
}

