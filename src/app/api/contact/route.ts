import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"
import ContactEmail from "@/components/emails/contact-email"
import ConfirmationEmail from "@/components/emails/confirmation-email"

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const body = schema.parse(json)

    const supabase = createRouteHandlerClient({ cookies })

    // Insert contact message into database
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert({
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
      })

    if (dbError) {
      console.error("Error saving contact message:", dbError)
      return NextResponse.json(
        { error: "Error saving your message" },
        { status: 500 }
      )
    }

    try {
      // Send notification email to admin
      await resend.emails.send({
        from: "CoNest <contacto@conest.mx>",
        to: "admin@conest.mx",
        subject: `Nuevo mensaje de contacto: ${body.subject}`,
        react: ContactEmail({
          name: body.name,
          email: body.email,
          subject: body.subject,
          message: body.message,
        }),
      })

      // Send confirmation email to user
      await resend.emails.send({
        from: "CoNest <contacto@conest.mx>",
        to: body.email,
        subject: "Gracias por contactar con CoNest",
        react: ConfirmationEmail({
          name: body.name,
        }),
      })
    } catch (emailError) {
      // Log email error but don't fail the request since message was saved
      console.error("Error sending emails:", emailError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Error processing your request" },
      { status: 500 }
    )
  }
} 