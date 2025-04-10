"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

const NOTIFICATIONS_PATH = "/notifications"

type NotificationData = {
  userId: string
  title: string
  message: string
  notificationType: string
  relatedUserId?: string
}

type Result<T> = { success: true; data: T } | { success: false; error: string }

/**
 * Crea una nueva notificación para un usuario
 */
export async function createNotification(data: NotificationData): Promise<Result<any>> {
  try {
    const supabase = await createClient()

    const { data: notification, error } = await supabase
      .from("notifications")
      .insert({
        user_id: data.userId,
        title: data.title,
        message: data.message,
        notification_type: data.notificationType,
        related_user_id: data.relatedUserId ?? null,
        is_read: false,
      })
      .select()
      .single()

    if (error) {
      console.error("[createNotification] Supabase error:", error)
      return { success: false, error: error.message }
    }

    revalidatePath(NOTIFICATIONS_PATH)

    return { success: true, data: notification }
  } catch (error) {
    console.error("[createNotification] Server error:", error)
    return { success: false, error: "Error interno del servidor" }
  }
}

/**
 * Obtiene todas las notificaciones de un usuario
 */
export async function getUserNotifications(userId: string): Promise<Result<any[]>> {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("[getUserNotifications] Supabase error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[getUserNotifications] Server error:", error)
    return { success: false, error: "Error interno del servidor" }
  }
}

/**
 * Marca una notificación como leída
 */
export async function markNotificationAsRead(notificationId: string): Promise<Result<null>> {
  try {
    const supabase = await createClient()

    const { error } = await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("id", notificationId)

    if (error) {
      console.error("[markNotificationAsRead] Supabase error:", error)
      return { success: false, error: error.message }
    }

    revalidatePath(NOTIFICATIONS_PATH)

    return { success: true, data: null }
  } catch (error) {
    console.error("[markNotificationAsRead] Server error:", error)
    return { success: false, error: "Error interno del servidor" }
  }
}

/**
 * Crea una notificación de match entre dos usuarios
 */
export async function createMatchNotification(
  userId: string,
  matchedUserId: string,
  matchedUserName: string
): Promise<Result<any>> {
  return createNotification({
    userId,
    title: "¡Nuevo Match!",
    message: `Has hecho match con ${matchedUserName}. ¡Comienza a chatear ahora!`,
    notificationType: "match",
    relatedUserId: matchedUserId,
  })
}
