"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Database } from "@/types/supabase"
import { supabase } from "@/lib/supabase"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"

type Profile = Database["public"]["Tables"]["profiles"]["Row"]
type Match = Database["public"]["Tables"]["matches"]["Row"]
type Message = Database["public"]["Tables"]["messages"]["Row"]

interface ChatListProps {
  userId: string
  userType: "host" | "student"
  onSelectChat: (matchId: string, otherUser: Profile) => void
}

interface ChatPreview {
  match: Match
  otherUser: Profile
  lastMessage: Message | null
  unreadCount: number
}

export function ChatList({ userId, userType, onSelectChat }: ChatListProps) {
  const [chats, setChats] = useState<ChatPreview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadChats()
    subscribeToMessages()
  }, [])

  async function loadChats() {
    try {
      setLoading(true)
      setError(null)

      // Obtener matches activos
      const { data: matches, error: matchesError } = await supabase
        .from("matches")
        .select("*")
        .or(
          `and(host_id.eq.${userId},status.eq.accepted),` +
          `and(student_id.eq.${userId},status.eq.accepted)`
        )
        .order("created_at", { ascending: false })

      if (matchesError) throw matchesError

      // Para cada match, obtener el perfil del otro usuario y el último mensaje
      const chatPreviews = await Promise.all(
        (matches || []).map(async (match) => {
          const otherUserId =
            match.host_id === userId ? match.student_id : match.host_id

          // Obtener perfil del otro usuario
          const { data: otherUser } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", otherUserId)
            .single()

          // Obtener último mensaje
          const { data: messages } = await supabase
            .from("messages")
            .select("*")
            .or(
              `and(sender_id.eq.${userId},receiver_id.eq.${otherUserId}),` +
              `and(sender_id.eq.${otherUserId},receiver_id.eq.${userId})`
            )
            .order("created_at", { ascending: false })
            .limit(1)

          // Contar mensajes no leídos
          const { count: unreadCount } = await supabase
            .from("messages")
            .select("*", { count: "exact" })
            .eq("receiver_id", userId)
            .eq("sender_id", otherUserId)
            .eq("read", false)

          return {
            match,
            otherUser,
            lastMessage: messages?.[0] || null,
            unreadCount: unreadCount || 0,
          }
        })
      )

      setChats(chatPreviews)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar los chats")
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
          event: "*",
          schema: "public",
          table: "messages",
        },
        () => {
          loadChats()
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-red-500">{error}</p>
      </div>
    )
  }

  if (chats.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Aún no tienes conversaciones activas
        </p>
      </div>
    )
  }

  return (
    <div className="divide-y">
      {chats.map(({ match, otherUser, lastMessage, unreadCount }) => (
        <button
          key={match.id}
          onClick={() => onSelectChat(match.id, otherUser)}
          className="flex items-start gap-4 p-4 w-full hover:bg-muted/50 transition-colors"
        >
          <div className="relative">
            <Image
              src={otherUser.avatar_url || "/images/default-avatar.png"}
              alt={otherUser.full_name || "Usuario"}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                {unreadCount}
              </span>
            )}
          </div>
          <div className="flex-1 text-left">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{otherUser.full_name}</h3>
              {lastMessage && (
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(lastMessage.created_at), {
                    addSuffix: true,
                    locale: es,
                  })}
                </span>
              )}
            </div>
            {lastMessage ? (
              <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                {lastMessage.content}
              </p>
            ) : (
              <p className="mt-1 text-sm text-muted-foreground italic">
                No hay mensajes aún
              </p>
            )}
          </div>
        </button>
      ))}
    </div>
  )
} 