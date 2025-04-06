"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@heroui/react"
import { ArrowLeft, Send } from "lucide-react"

type Message = {
  id: string
  role: "user" | "assistant" | "system"
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim() || isLoading) return

    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      // Preparar mensajes para la API - asegurarse de enviar todo el historial
      // Excluir mensajes de sistema ya que se añaden en el servidor
      const chatMessages = messages
        .filter((msg) => msg.role !== "system")
        .map(({ role, content }) => ({ role, content }))

      // Añadir el nuevo mensaje del usuario
      chatMessages.push({ role: "user", content: input })

      // Imprimir para depuración
      console.log("Enviando mensajes desde el cliente:", chatMessages)

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatMessages }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(`API error: ${errorData.error || response.statusText}`)
      }

      // Manejar respuesta no streaming
      const data = await response.json()
      console.log("Respuesta recibida:", data)

      // Verificar si hay un error en la respuesta
      if (data.error) {
        throw new Error(data.error)
      }

      const assistantContent = data.choices?.[0]?.message?.content || "No response content"

      // Verificar que la respuesta no esté vacía
      if (!assistantContent.trim()) {
        throw new Error("La respuesta del asistente está vacía")
      }

      // Verificar que la respuesta no sea una repetición
      if (assistantContent === input) {
        console.warn("La respuesta es igual a la entrada del usuario - posible error")
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: assistantContent,
        },
      ])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido")
      console.error("Chat error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-conest-lightBlue/10 to-white p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-soft flex flex-col h-[80vh] border border-conest-lightBlue/20">
        <div className="p-4 border-b border-gray-100 text-center relative flex items-center justify-center bg-gradient-to-r from-conest-blue to-conest-mediumBlue rounded-t-2xl">
          <Link href="/" className="absolute left-4 text-white hover:text-gray-100 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold text-white">Asistente Virtual CoNest</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-4 md:p-8">
              <div className="w-20 h-20 mb-6 rounded-full bg-conest-lightBlue/10 flex items-center justify-center overflow-hidden">
                <img src="/images/nestor/nestor.png" alt="Nestor" className="w-16 h-16 object-contain" />
              </div>
              <h2 className="text-xl font-semibold text-conest-darkGray mb-2">¡Hola! Soy Nestor</h2>
              <p className="text-conest-darkGray/70 mb-6 max-w-md">
                Soy el asistente virtual de CoNest y estoy aquí para ayudarte con las dudas que tengas sobre 
                nuestra plataforma, el proceso de matching o la convivencia intergeneracional.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-md">
                <Button 
                  className="text-center py-3 px-4 bg-conest-lightBlue/10 rounded-xl text-conest-blue hover:bg-conest-lightBlue/20 transition-colors"
                  onClick={() => setInput("¿Cómo funciona el proceso de matching?")}
                  variant="flat"
                >
                  ¿Cómo funciona el matching?
                </Button>
                <Button 
                  className="text-center py-3 px-4 bg-conest-lightBlue/10 rounded-xl text-conest-blue hover:bg-conest-lightBlue/20 transition-colors"
                  onClick={() => setInput("¿Cómo me registro como estudiante?")}
                  variant="flat"
                >
                  Registro de estudiante
                </Button>
                <Button 
                  className="text-center py-3 px-4 bg-conest-lightBlue/10 rounded-xl text-conest-blue hover:bg-conest-lightBlue/20 transition-colors"
                  onClick={() => setInput("¿Cómo me registro como anfitrión?")}
                  variant="flat"
                >
                  Registro de anfitrión
                </Button>
                <Button 
                  className="text-center py-3 px-4 bg-conest-lightBlue/10 rounded-xl text-conest-blue hover:bg-conest-lightBlue/20 transition-colors"
                  onClick={() => setInput("¿Cómo se garantiza la seguridad?")}
                  variant="flat"
                >
                  Medidas de seguridad
                </Button>
              </div>
              
              {error && (
                <div className="mt-6 w-full max-w-md bg-red-50 text-red-600 p-3 rounded-lg border border-red-200">
                  Error: {error}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              {messages.map(
                (message) =>
                  message.role !== "system" && (
                    <div
                      key={message.id}
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === "user" 
                          ? "bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white self-end rounded-br-sm" 
                          : "bg-conest-lightBlue/10 text-conest-darkGray self-start rounded-bl-sm"
                      }`}
                    >
                      <p className="text-sm md:text-base whitespace-pre-wrap">{message.content}</p>
                    </div>
                  ),
              )}
              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-conest-lightBlue/10 text-conest-darkGray self-start rounded-bl-sm">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-conest-blue animate-bounce"></div>
                    <div className="h-2 w-2 rounded-full bg-conest-blue animate-bounce delay-100"></div>
                    <div className="h-2 w-2 rounded-full bg-conest-blue animate-bounce delay-200"></div>
                  </div>
                </div>
              )}
              {error && (
                <div className="self-center bg-red-50 text-red-600 p-3 rounded-lg border border-red-200 max-w-[90%]">
                  Error: {error}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-100">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              className="flex-1 px-4 py-3 rounded-xl border border-conest-lightBlue/20 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-conest-blue/40 placeholder-gray-400"

              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className={`px-4 py-3 rounded-xl flex items-center justify-center ${
                isLoading || !input.trim() 
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                  : "bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white hover:opacity-90"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Enviando
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="h-4 w-4 mr-2" /> Enviar
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}


