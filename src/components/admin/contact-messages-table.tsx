"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { toast } from "sonner"

type ContactMessage = {
  id: string
  created_at: string
  name: string
  email: string
  subject: string
  message: string
  status: string
  responded_at: string | null
  response: string | null
}

export function ContactMessagesTable({
  initialMessages,
}: {
  initialMessages: ContactMessage[]
}) {
  const [messages, setMessages] = useState(initialMessages)
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)
  const [response, setResponse] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const supabase = createClientComponentClient()

  const handleResponse = async () => {
    if (!selectedMessage) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact/respond", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messageId: selectedMessage.id,
          response,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Error al enviar la respuesta")
      }

      // Update local state
      setMessages(messages.map(msg =>
        msg.id === selectedMessage.id
          ? {
              ...msg,
              status: "responded",
              response,
              responded_at: new Date().toISOString(),
            }
          : msg
      ))

      toast.success("Respuesta enviada correctamente")
      setSelectedMessage(null)
      setResponse("")
    } catch (error) {
      console.error("Error sending response:", error)
      toast.error(error instanceof Error ? error.message : "Error al enviar la respuesta")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary">Pendiente</Badge>
      case "responded":
        return <Badge variant="success">Respondido</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fecha</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Asunto</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message) => (
            <TableRow key={message.id}>
              <TableCell>
                {format(new Date(message.created_at), "dd/MM/yyyy HH:mm", {
                  locale: es,
                })}
              </TableCell>
              <TableCell>{message.name}</TableCell>
              <TableCell>{message.email}</TableCell>
              <TableCell>{message.subject}</TableCell>
              <TableCell>{getStatusBadge(message.status)}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedMessage(message)}
                >
                  Ver detalles
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Mensaje de contacto</DialogTitle>
            <DialogDescription>
              Enviado el{" "}
              {selectedMessage &&
                format(new Date(selectedMessage.created_at), "dd/MM/yyyy HH:mm", {
                  locale: es,
                })}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div>
              <h4 className="font-medium">Remitente</h4>
              <p className="text-sm text-gray-500">
                {selectedMessage?.name} ({selectedMessage?.email})
              </p>
            </div>

            <div>
              <h4 className="font-medium">Asunto</h4>
              <p className="text-sm text-gray-500">{selectedMessage?.subject}</p>
            </div>

            <div>
              <h4 className="font-medium">Mensaje</h4>
              <p className="text-sm text-gray-500 whitespace-pre-wrap">
                {selectedMessage?.message}
              </p>
            </div>

            {selectedMessage?.status === "responded" ? (
              <div>
                <h4 className="font-medium">Respuesta</h4>
                <p className="text-sm text-gray-500 whitespace-pre-wrap">
                  {selectedMessage?.response}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Respondido el{" "}
                  {selectedMessage?.responded_at &&
                    format(new Date(selectedMessage.responded_at), "dd/MM/yyyy HH:mm", {
                      locale: es,
                    })}
                </p>
              </div>
            ) : (
              <div>
                <h4 className="font-medium">Responder</h4>
                <Textarea
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  rows={5}
                />
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedMessage(null)}>
              Cerrar
            </Button>
            {selectedMessage?.status !== "responded" && (
              <Button onClick={handleResponse} disabled={!response || isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar respuesta"}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
} 