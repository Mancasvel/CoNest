import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId, title, message, notificationType, relatedUserId } = await request.json()

    // Validar datos
    if (!userId || !title || !message || !notificationType) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Crear cliente de Supabase
    const supabase = await createClient()

    // Insertar notificación
    const { data, error } = await supabase
      .from("notifications")
      .insert({
        user_id: userId,
        title,
        message,
        notification_type: notificationType,
        related_user_id: relatedUserId || null,
        is_read: false,
      })
      .select()
      .single()

    if (error) {
      console.error("Error al crear notificación:", error)
      return NextResponse.json({ error: "Error al crear la notificación" }, { status: 500 })
    }

    return NextResponse.json({ success: true, notification: data })
  } catch (error) {
    console.error("Error en el servidor:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const userId = url.searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "Se requiere el ID del usuario" }, { status: 400 })
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ error: "Error al obtener notificaciones" }, { status: 500 })
    }

    return NextResponse.json({ notifications: data })
  } catch (error) {
    console.error("Error en el servidor:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}