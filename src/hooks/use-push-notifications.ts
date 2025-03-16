"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export function usePushNotifications() {
  const [subscription, setSubscription] = useState<PushSubscription | null>(null)
  const [permission, setPermission] = useState<NotificationPermission>("default")

  useEffect(() => {
    if ("Notification" in window) {
      setPermission(Notification.permission)
    }
  }, [])

  async function subscribe() {
    try {
      // Solicitar permiso para notificaciones
      const permission = await Notification.requestPermission()
      setPermission(permission)

      if (permission !== "granted") {
        throw new Error("Permiso de notificación denegado")
      }

      // Registrar el service worker
      const registration = await navigator.serviceWorker.register("/sw.js")
      await navigator.serviceWorker.ready

      // Obtener la suscripción existente o crear una nueva
      const existingSubscription = await registration.pushManager.getSubscription()
      
      if (existingSubscription) {
        setSubscription(existingSubscription)
        return existingSubscription
      }

      // Generar las claves VAPID desde el backend
      const { data: { publicKey }, error: vapidError } = await supabase
        .from("push_keys")
        .select("public_key")
        .single()

      if (vapidError) throw vapidError

      // Crear nueva suscripción
      const newSubscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey
      })

      setSubscription(newSubscription)

      // Guardar la suscripción en la base de datos
      const { error: saveError } = await supabase
        .from("push_subscriptions")
        .upsert({
          user_id: (await supabase.auth.getUser()).data.user?.id,
          endpoint: newSubscription.endpoint,
          auth: newSubscription.toJSON().keys?.auth,
          p256dh: newSubscription.toJSON().keys?.p256dh
        })

      if (saveError) throw saveError

      return newSubscription
    } catch (error) {
      console.error("Error al suscribirse a notificaciones:", error)
      throw error
    }
  }

  async function unsubscribe() {
    try {
      if (subscription) {
        await subscription.unsubscribe()
        setSubscription(null)

        // Eliminar la suscripción de la base de datos
        const { error } = await supabase
          .from("push_subscriptions")
          .delete()
          .match({
            endpoint: subscription.endpoint,
            user_id: (await supabase.auth.getUser()).data.user?.id
          })

        if (error) throw error
      }
    } catch (error) {
      console.error("Error al cancelar la suscripción:", error)
      throw error
    }
  }

  return {
    subscription,
    permission,
    subscribe,
    unsubscribe
  }
} 