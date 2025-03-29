import { type NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@/utils/supabase/server";

// Deshabilitar el body parser para acceder al raw body
export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: ReadableStream<Uint8Array> | null) {
  if (!readable) throw new Error("ReadableStream is null");

  const reader = readable.getReader();
  const chunks: Uint8Array[] = [];

  let done = false;
  while (!done) {
    const { value, done: readerDone } = await reader.read();
    if (value) chunks.push(value);
    done = readerDone;
  }

  return Buffer.concat(chunks);
}

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient(); // Asegurar que Supabase está correctamente inicializado

    const buf = await buffer(req.body!);
    const sig = req.headers.get("stripe-signature")!;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err: any) {
      console.error(`Webhook signature verification failed: ${err.message}`);
      return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    // Manejar el evento
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;

        // Actualizar el estado del pago en Supabase
        await supabase.from("payment_sessions").update({ status: "completed" }).eq("stripe_session_id", session.id);

        // Actualizar el estado de la suscripción del usuario
        if (session.metadata?.userId) {
          await supabase
            .from("users")
            .update({
              is_subscribed: true,
              subscription_status: "active",
              subscription_end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días desde ahora
            })
            .eq("id", session.metadata.userId);
        }

        break;

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ error: "Error processing webhook" }, { status: 500 });
  }
}
