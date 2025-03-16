import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

const MATCHING_FEE = 999 // $9.99 USD

export async function POST(request: Request) {
  try {
    const { amount = MATCHING_FEE } = await request.json()

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "mxn",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        type: "matching_fee",
      },
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (err) {
    console.error("Error creating payment intent:", err)
    return NextResponse.json(
      { error: "Error al procesar el pago" },
      { status: 500 }
    )
  }
} 