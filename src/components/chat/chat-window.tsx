"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Database } from "@/types/supabase"
import { supabase } from "@/lib/supabase"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"
import { Send, Bell, BellOff, Image as ImageIcon } from "lucide-react"
import { usePushNotifications } from "@/hooks/use-push-notifications"
import { useTypingIndicator } from "@/hooks/use-typing-indicator"
import { AttachmentUpload } from "./attachment-upload"

type Profile = Database["public"]["Tables"]["profiles"]["Row"]
type Message = Database["public"]["Tables"]["messages"]["Row"]

interface ChatWindowProps {
  matchId: string
  userId: string
  otherUser: Profile
}

interface MessageContent {
  text: string
  attachment?: {
    url: string
    type: string
    name: string
  }
}

export function ChatWindow({ matchId, userId, otherUser }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [attachment, setAttachment] = useState<MessageContent["attachment"]>()
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showAttachment, setShowAttachment] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { subscription, permission, subscribe, unsubscribe } = usePushNotifications()
  const { isOtherUserTyping, startTyping, stopTyping } = useTypingIndicator(
    matchId,
    userId
  )

  useEffect(() => {
    loadMessages()
    const unsubscribe = subscribeToMessages()
    markMessagesAsRead()
    return unsubscribe
  }, [matchId])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  async function loadMessages() {
    try {
      setLoading(true)
      setError(null)

      const { data: messages, error: messagesError } = await supabase
        .from("messages")
        .select("*")
        .or(
          `and(sender_id.eq.${userId},receiver_id.eq.${otherUser.id}),` +
          `and(sender_id.eq.${otherUser.id},receiver_id.eq.${userId})`
        )
        .order("created_at", { ascending: true })

      if (messagesError) throw messagesError
      setMessages(messages || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar los mensajes")
    } finally {
      setLoading(false)
    }
  }

  function subscribeToMessages() {
    const subscription = supabase
      .channel("messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `receiver_id=eq.${userId}`,
        },
        (payload) => {
          const newMessage = payload.new as Message
          setMessages((current) => [...current, newMessage])
          markMessagesAsRead()
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }

  async function markMessagesAsRead() {
    try {
      const { error: updateError } = await supabase
        .from("messages")
        .update({ read: true })
        .eq("receiver_id", userId)
        .eq("sender_id", otherUser.id)
        .eq("read", false)

      if (updateError) throw updateError
    } catch (err) {
      console.error("Error al marcar mensajes como leídos:", err)
    }
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewMessage(e.target.value)
    startTyping()
  }

  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault()
    if ((!newMessage.trim() && !attachment) || sending) return

    try {
      setSending(true)
      setError(null)
      stopTyping()

      const message = {
        sender_id: userId,
        receiver_id: otherUser.id,
        content: newMessage.trim(),
        attachment_url: attachment?.url,
        attachment_type: attachment?.type,
        attachment_name: attachment?.name,
      }

      const { error: sendError } = await supabase
        .from("messages")
        .insert([message])

      if (sendError) throw sendError

      setNewMessage("")
      setAttachment(undefined)
      setShowAttachment(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje")
    } finally {
      setSending(false)
    }
  }

  function handleAttachmentUpload(url: string, type: string, name: string) {
    setAttachment({ url, type, name })
  }

  function handleCancelAttachment() {
    setAttachment(undefined)
    setShowAttachment(false)
  }

  async function handleNotificationToggle() {
    try {
      if (subscription) {
        await unsubscribe()
      } else {
        await subscribe()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al gestionar las notificaciones")
    }
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={otherUser.avatar_url || "/images/default-avatar.png"}
              alt={otherUser.full_name || "Usuario"}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">{otherUser.full_name}</h3>
              <p className="text-sm text-muted-foreground">
                {otherUser.user_type === "host" ? "Anfitrión" : "Estudiante"}
              </p>
            </div>
          </div>
          
          {"Notification" in window && (
            <button
              onClick={handleNotificationToggle}
              className="rounded-lg p-2 hover:bg-accent"
              title={subscription ? "Desactivar notificaciones" : "Activar notificaciones"}
            >
              {subscription ? (
                <Bell className="h-5 w-5" />
              ) : (
                <BellOff className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => {
            const isOwn = message.sender_id === userId
            return (
              <div
                key={message.id}
                className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    isOwn
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.attachment_url && message.attachment_type?.startsWith("image/") && (
                    <div className="mb-2">
                      <Image
                        src={message.attachment_url}
                        alt={message.attachment_name || "Imagen adjunta"}
                        width={300}
                        height={200}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  )}
                  {message.content && <p className="text-sm">{message.content}</p>}
                  <span className="mt-1 block text-[10px] opacity-70">
                    {formatDistanceToNow(new Date(message.created_at), {
                      addSuffix: true,
                      locale: es,
                    })}
                  </span>
                </div>
              </div>
            )
          })}
          {isOtherUserTyping && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex gap-1">
                <span className="animate-bounce">•</span>
                <span className="animate-bounce [animation-delay:0.2s]">•</span>
                <span className="animate-bounce [animation-delay:0.4s]">•</span>
              </div>
              <span>{otherUser.full_name} está escribiendo...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSendMessage} className="border-t p-4">
        {showAttachment && (
          <div className="mb-4">
            <AttachmentUpload
              onUpload={handleAttachmentUpload}
              onCancel={handleCancelAttachment}
            />
          </div>
        )}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowAttachment(!showAttachment)}
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-accent"
          >
            <ImageIcon className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
            onBlur={stopTyping}
            placeholder="Escribe un mensaje..."
            className="flex-1 rounded-lg border bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            disabled={sending}
          />
          <button
            type="submit"
            disabled={(!newMessage.trim() && !attachment) || sending}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </form>
    </div>
  )
} 