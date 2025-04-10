"use client"

import { useState, useEffect, useRef } from "react"
import { Bell } from "lucide-react"
import { getUserNotifications, markNotificationAsRead } from "@/lib/actions/notifications"
import { useRouter } from "next/navigation"
import type { Notification } from "@/types/notification"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function NotificationBell({ userId }: { userId: string }) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const fetchNotifications = async () => {
    if (!userId) return

    setLoading(true)
    try {
      const result = await getUserNotifications(userId)
      if (result.success && result.data) {
        setNotifications(result.data)
      }
    } catch (error) {
      console.error("Error fetching notifications:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotifications()

    const interval = setInterval(fetchNotifications, 30000)
    return () => clearInterval(interval)
  }, [userId])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  const handleNotificationClick = async (notification: Notification) => {
    if (!notification.is_read) {
      await markNotificationAsRead(notification.id)
      setNotifications((prev) =>
        prev.map((n) => (n.id === notification.id ? { ...n, is_read: true } : n))
      )
    }

    if (notification.notification_type === "match" && notification.related_user_id) {
      router.push(`/chat/${notification.related_user_id}`)
      setOpen(false)
    }
  }

  const unreadCount = notifications.filter((n) => !n.is_read).length

  return (
    <div className="relative" ref={panelRef}>
      <Button
        variant="ghost"
        size="icon"
        className="relative rounded-full"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center rounded-full text-[10px]"
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </Badge>
        )}
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded-md shadow-lg z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-medium">Notificaciones</h3>
            {notifications.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-7"
                onClick={() => {
                  router.push("/notifications")
                  setOpen(false)
                }}
              >
                Ver todas
              </Button>
            )}
          </div>

          <div className="max-h-[300px] overflow-y-auto">
            {loading ? (
              <div className="p-4 text-center text-sm text-muted-foreground">Cargando...</div>
            ) : notifications.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No tienes notificaciones
              </div>
            ) : (
              <div>
                {notifications.slice(0, 5).map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification)}
                    className={`p-4 border-b last:border-b-0 cursor-pointer hover:bg-accent/50 transition-colors ${
                      !notification.is_read ? "bg-accent/30" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {!notification.is_read && (
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      )}
                      <div className="space-y-1">
                        <p className="font-medium text-sm">{notification.title}</p>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(notification.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
