import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { markNotificationAsRead } from "@/lib/actions/notifications"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"

export default async function NotificationsPage() {
  const supabase = await createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/")
  }

  // Obtener notificaciones
  const { data: notifications } = await supabase
    .from("notifications")
    .select("*")
    .eq("user_id", session.user.id)
    .order("created_at", { ascending: false })

  async function handleMarkAsRead(id: string) {
    "use server"
    await markNotificationAsRead(id)
  }

  return (
    <div className="container max-w-4xl py-8">
      <h1 className="text-2xl font-bold mb-6">Notificaciones</h1>

      {!notifications || notifications.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No tienes notificaciones</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={!notification.is_read ? "border-primary/20 bg-primary/5" : ""}
            >
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{notification.title}</CardTitle>
                  <div className="text-xs text-muted-foreground">
                    {new Date(notification.created_at).toLocaleString()}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="mb-4">{notification.message}</p>
                <div className="flex justify-between items-center">
                  {notification.notification_type === "match" && notification.related_user_id && (
                    <Button asChild size="sm">
                      <Link href={`/chat/${notification.related_user_id}`}>Ir al chat</Link>
                    </Button>
                  )}

                  {!notification.is_read && (
                    <form action={handleMarkAsRead.bind(null, notification.id)}>
                      <Button type="submit" variant="ghost" size="sm">
                        Marcar como leída
                      </Button>
                    </form>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
