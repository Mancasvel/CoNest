import { loadStripe, type Stripe as StripeType } from "@stripe/stripe-js"
import Stripe from "stripe"

// Initialize Stripe client for server-side operations
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
})

// Initialize Stripe client for client-side operations
let stripePromise: Promise<StripeType | null>
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

