"use client"

import { useState } from "react"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import { ChatList } from "@/components/chat/chat-list"
import { ChatWindow } from "@/components/chat/chat-window"
import { Database } from "@/types/supabase"

type Profile = Database["public"]["Tables"]["profiles"]["Row"]

export default async function ChatPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  // Obtener el perfil del usuario
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single()

  // Si el usuario no ha completado el onboarding, redirigir
  if (!profile?.bio || !profile?.preferences) {
    redirect("/onboarding")
  }

  return <ChatPageClient userId={session.user.id} userType={profile.user_type} />
}

function ChatPageClient({ userId, userType }: { userId: string, userType: "host" | "student" }) {
  const [selectedChat, setSelectedChat] = useState<{
    matchId: string
    otherUser: Profile
  } | null>(null)

  return (
    <div className="container h-[calc(100vh-4rem)] py-8">
      <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-[350px,1fr]">
        <div className="border rounded-lg overflow-hidden">
          <div className="border-b p-4">
            <h2 className="font-semibold">Conversaciones</h2>
          </div>
          <ChatList
            userId={userId}
            userType={userType}
            onSelectChat={(matchId, otherUser) =>
              setSelectedChat({ matchId, otherUser })
            }
          />
        </div>

        <div className="border rounded-lg overflow-hidden">
          {selectedChat ? (
            <ChatWindow
              matchId={selectedChat.matchId}
              userId={userId}
              otherUser={selectedChat.otherUser}
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-muted-foreground">
                Selecciona una conversación para comenzar
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 