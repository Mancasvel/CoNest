"use client"

import { useState, useEffect, useCallback } from "react"
import { supabase } from "@/lib/supabase"
import debounce from "lodash/debounce"

export function useTypingIndicator(matchId: string, userId: string) {
  const [isOtherUserTyping, setIsOtherUserTyping] = useState(false)

  // Función para actualizar el estado de escritura en la base de datos
  const updateTypingStatus = useCallback(
    async (isTyping: boolean) => {
      try {
        const { error } = await supabase
          .from("typing_status")
          .upsert({
            match_id: matchId,
            user_id: userId,
            is_typing: isTyping,
          })

        if (error) throw error
      } catch (err) {
        console.error("Error al actualizar el estado de escritura:", err)
      }
    },
    [matchId, userId]
  )

  // Versión debounced de la función para evitar actualizaciones frecuentes
  const debouncedStopTyping = useCallback(
    debounce(() => updateTypingStatus(false), 1000),
    [updateTypingStatus]
  )

  // Función para indicar que el usuario está escribiendo
  const startTyping = useCallback(() => {
    updateTypingStatus(true)
    debouncedStopTyping()
  }, [updateTypingStatus, debouncedStopTyping])

  // Función para indicar que el usuario dejó de escribir
  const stopTyping = useCallback(() => {
    debouncedStopTyping.cancel()
    updateTypingStatus(false)
  }, [debouncedStopTyping, updateTypingStatus])

  // Suscribirse a cambios en el estado de escritura del otro usuario
  useEffect(() => {
    // Crear o actualizar el estado inicial
    updateTypingStatus(false)

    // Suscribirse a cambios
    const subscription = supabase
      .channel(`typing:${matchId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "typing_status",
          filter: `match_id=eq.${matchId}`,
        },
        (payload) => {
          const typingStatus = payload.new as {
            user_id: string
            is_typing: boolean
            updated_at: string
          }

          // Solo actualizar si es el otro usuario
          if (typingStatus.user_id !== userId) {
            // Verificar si el estado es reciente (menos de 5 segundos)
            const isRecent =
              Date.now() - new Date(typingStatus.updated_at).getTime() < 5000

            setIsOtherUserTyping(typingStatus.is_typing && isRecent)
          }
        }
      )
      .subscribe()

    // Limpiar al desmontar
    return () => {
      subscription.unsubscribe()
      stopTyping()
    }
  }, [matchId, userId])

  return {
    isOtherUserTyping,
    startTyping,
    stopTyping,
  }
} 