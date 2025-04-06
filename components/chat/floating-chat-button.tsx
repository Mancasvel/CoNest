"use client"

import { useState, useEffect, FormEvent } from "react"
import { MessageSquare, X, Send, ArrowLeft } from "lucide-react"
import { Button } from "@heroui/react"

type Message = {
  id: string
  role: "user" | "assistant" | "system"
  content: string
}

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Efecto para hacer scroll automático cuando hay nuevos mensajes
  useEffect(() => {
    if (isOpen && messages.length > 0) {
      const chatContainer = document.getElementById('chat-messages-container');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  }, [messages, isOpen]);

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
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

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatMessages }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(`API error: ${errorData.error || response.statusText}`)
      }

      // Manejar respuesta
      const data = await response.json()

      // Verificar si hay un error en la respuesta
      if (data.error) {
        throw new Error(data.error)
      }

      const assistantContent = data.choices?.[0]?.message?.content || "No response content"

      // Verificar que la respuesta no esté vacía
      if (!assistantContent.trim()) {
        throw new Error("La respuesta del asistente está vacía")
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

  // Función para enviar directamente una pregunta predefinida
  const setPresetQuestion = async (question: string) => {
    if (isLoading) return

    // Establecer la pregunta en el input y enviarla automáticamente
    setInput(question)
    
    // Crear un evento sintético
    const syntheticEvent = {
      preventDefault: () => {}
    } as unknown as FormEvent;
    
    // Pequeño hack para permitir que React actualice el estado antes de enviar
    setTimeout(() => {
      // Enviar la pregunta usando la misma función del formulario
      handleSubmit(syntheticEvent);
    }, 10);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div 
          className="w-80 sm:w-96 h-[600px] max-h-[80vh] flex flex-col bg-white shadow-xl rounded-xl border border-conest-lightBlue/20 overflow-hidden animate-fadeIn"
          style={{animation: 'fadeIn 0.3s ease-out forwards'}}
        >
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white">
            <h3 className="font-semibold">Asistente Virtual CoNest</h3>
            <button 
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div id="chat-messages-container" className="flex-1 p-4 overflow-y-auto bg-gradient-to-br from-conest-lightBlue/5 to-white">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <div className="w-16 h-16 mb-4 rounded-full bg-conest-lightBlue/10 flex items-center justify-center overflow-hidden">
                  <img src="/images/nestor/nestor.png" alt="Nestor" className="w-14 h-14 object-contain" />
                </div>
                <h4 className="text-lg font-semibold text-conest-darkGray mb-2">¡Hola! Soy Nestor</h4>
                <p className="text-conest-darkGray/70 mb-4 text-sm">
                  Soy el asistente virtual de CoNest y estoy aquí para ayudarte con las dudas que tengas sobre nuestra plataforma.
                </p>
                
                <div className="grid grid-cols-1 gap-2 w-full">
                  <Button 
                    className="text-center py-2 px-3 bg-conest-lightBlue/10 rounded-xl text-conest-blue hover:bg-conest-lightBlue/20 transition-colors text-sm shadow-sm hover:shadow"
                    onClick={() => setPresetQuestion("¿Cómo funciona el proceso de matching?")}
                    variant="flat"
                    size="sm"
                  >
                    ¿Cómo funciona el matching?
                  </Button>
                  <Button 
                    className="text-center py-2 px-3 bg-conest-lightBlue/10 rounded-xl text-conest-blue hover:bg-conest-lightBlue/20 transition-colors text-sm shadow-sm hover:shadow"
                    onClick={() => setPresetQuestion("¿Cómo me registro como estudiante?")}
                    variant="flat"
                    size="sm"
                  >
                    Registro de estudiante
                  </Button>
                  <Button 
                    className="text-center py-2 px-3 bg-conest-lightBlue/10 rounded-xl text-conest-blue hover:bg-conest-lightBlue/20 transition-colors text-sm shadow-sm hover:shadow"
                    onClick={() => setPresetQuestion("¿Cómo se garantiza la seguridad?")}
                    variant="flat"
                    size="sm"
                  >
                    Medidas de seguridad
                  </Button>
                </div>
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
                            ? "bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white self-end rounded-br-sm animate-slideInRight" 
                            : "bg-conest-lightBlue/10 text-conest-darkGray self-start rounded-bl-sm animate-slideInLeft"
                        }`}
                        style={{
                          animation: message.role === "user" 
                            ? 'slideInRight 0.3s ease-out forwards' 
                            : 'slideInLeft 0.3s ease-out forwards'
                        }}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
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
                  <div className="self-center bg-red-50 text-red-600 p-3 rounded-lg border border-red-200 max-w-[90%] text-xs">
                    Error: {error}
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="p-3 border-t border-gray-100">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                className="flex-1 px-3 py-2 rounded-xl border border-conest-lightBlue/20 focus:outline-none focus:ring-2 focus:ring-conest-blue/40 placeholder-gray-400 text-sm bg-conest-lightBlue"
                type="text"
                placeholder="Escribe tu mensaje..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`px-3 py-2 rounded-xl ${
                  isLoading || !input.trim()
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-conest-blue text-white hover:bg-conest-mediumBlue"
                } transition-colors`}
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white shadow-lg hover:opacity-90 transition-all hover:scale-105 animate-fadeIn"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir chat"
          style={{animation: 'fadeIn 0.3s ease-out forwards'}}
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
