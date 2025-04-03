"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import styles from "./chat.module.css"

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
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}>
            ← Volver
          </Link>
          <h1 className={styles.title}>Asistente Virtual</h1>
        </div>

        <div className={styles.messagesContainer}>
          {messages.length === 0 ? (
            <div className={styles.emptyState}>
              <p>¿En qué puedo ayudarte hoy?</p>
              <p className={styles.smallText}>Haz cualquier pregunta sobre nuestro sitio o servicios.</p>
              {error && <div className={styles.errorMessage}>Error: {error}</div>}
            </div>
          ) : (
            <div className={styles.messages}>
              {messages.map(
                (message) =>
                  message.role !== "system" && (
                    <div
                      key={message.id}
                      className={`${styles.message} ${message.role === "user" ? styles.userMessage : styles.botMessage}`}
                    >
                      <div className={styles.messageContent}>
                        <span className={styles.messageText}>{message.content}</span>
                      </div>
                    </div>
                  ),
              )}
              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className={`${styles.message} ${styles.botMessage}`}>
                  <div className={styles.messageContent}>
                    <span className={styles.messageText}>Escribiendo...</span>
                  </div>
                </div>
              )}
              {error && <div className={styles.errorMessage}>Error: {error}</div>}
            </div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading || !input.trim()}>
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

