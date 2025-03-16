import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies })

    // Verify admin status
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user || user.email !== "admin@conest.mx") {
      return NextResponse.json(
        { error: "No autorizado" },
        { status: 401 }
      )
    }

    const json = await request.json()
    const { messageId, response } = json

    // Get message details
    const { data: message, error: messageError } = await supabase
      .from("contact_messages")
      .select()
      .eq("id", messageId)
      .single()

    if (messageError || !message) {
      return NextResponse.json(
        { error: "Mensaje no encontrado" },
        { status: 404 }
      )
    }

    // Send response email
    try {
      await resend.emails.send({
        from: "CoNest <contacto@conest.mx>",
        to: message.email,
        subject: `Re: ${message.subject}`,
        text: `Hola ${message.name},\n\n${response}\n\nAtentamente,\nEquipo CoNest`,
      })
    } catch (emailError) {
      console.error("Error sending response email:", emailError)
      // Continue with the update even if email fails
    }

    // Update message status
    const { error: updateError } = await supabase
      .from("contact_messages")
      .update({
        status: "responded",
        response,
        responded_at: new Date().toISOString(),
      })
      .eq("id", messageId)

    if (updateError) {
      return NextResponse.json(
        { error: "Error al actualizar el mensaje" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing response:", error)
    return NextResponse.json(
      { error: "Error al procesar la respuesta" },
      { status: 500 }
    )
  }
} 