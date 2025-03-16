import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Si no hay sesión y la ruta requiere autenticación, redirigir a login
  if (!session && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Si hay sesión, verificar el estado del pago para la creación de contratos
  if (session && request.nextUrl.pathname.startsWith("/contracts/create")) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("has_paid")
      .eq("id", session.user.id)
      .single()

    // Si el usuario no ha pagado, redirigir a la página de pago
    if (!profile?.has_paid) {
      return NextResponse.redirect(new URL("/payment", request.url))
    }
  }

  return res
}

export const config = {
  matcher: ["/contracts/create", "/payment", "/login"],
} 