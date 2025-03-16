import { Metadata } from "next"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import { ContactMessagesTable } from "@/components/admin/contact-messages-table"

export const metadata: Metadata = {
  title: "Administrar mensajes | CoNest",
  description: "Panel de administración de mensajes de contacto.",
}

export default async function AdminContactPage() {
  const supabase = createServerComponentClient({ cookies })

  // Check if user is admin
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "admin@conest.mx") {
    redirect("/")
  }

  // Get all contact messages
  const { data: messages } = await supabase
    .from("contact_messages")
    .select()
    .order("created_at", { ascending: false })

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Mensajes de contacto</h1>
            <p className="mt-2 text-gray-600">
              Gestiona y responde a los mensajes de contacto de los usuarios.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <ContactMessagesTable initialMessages={messages || []} />
          </div>
        </div>
      </div>
    </div>
  )
} 