import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value),
            );
            response = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options),
            );
          },
        },
      },
    );

    const { data: { user } } = await supabase.auth.getUser();
    const pathname = request.nextUrl.pathname;

    console.log("Ruta solicitada:", pathname);
    console.log("Usuario autenticado:", user ? "Sí" : "No");

    if ((pathname.startsWith("/protected") || pathname.startsWith("/student") || pathname.startsWith("/elder") || pathname.startsWith("/admin")) && !user) {
      console.log("🔴 Usuario no autenticado. Redirigiendo a /sign-in");
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    const roleRoutes: { [key: string]: string } = {
      student: "/student",
      admin: "/admin",
      owner: "/elder",
    };

    const userRole = user?.app_metadata?.role;
    console.log("Rol detectado:", userRole);
    const isAllowedRole = userRole && roleRoutes[userRole] && pathname.startsWith(roleRoutes[userRole]);

    if (!isAllowedRole && (pathname.startsWith("/student") || pathname.startsWith("/elder") || pathname.startsWith("/admin"))) {
      console.log("🔴 Acceso denegado por rol. Redirigiendo a /forbidden");
      return NextResponse.redirect(new URL("/forbidden", request.url));
    }

    if (user && (userRole === "student" || userRole === "owner")) {
      const table = userRole === "student" ? "students" : "elders";
      
      if (pathname.startsWith(`${roleRoutes[userRole]}/`)) {
        let { data: userState, error } = await supabase
          .from(table)
          .select("status")
          .eq("id", user.id)
          .single();

        console.log("Estado detectado:", userState);

        if (error || !userState || userState == null) {
          console.error(`🔴 Error obteniendo estado de ${userRole}:`, error);
          return NextResponse.redirect(new URL("/forbidden", request.url));
        }

        const stateRoutes: { [key: string]: string } = {
          REGISTERED: "/registered",
          MATCHMAKING: "/matchmaking",
          MATCHED: "/matched",
          RENTED: "/rented",
        };

        const isAllowedState =
          stateRoutes[userState?.status] &&
          pathname.startsWith(`${roleRoutes[userRole]}${stateRoutes[userState?.status]}`);

        if (!isAllowedState) {
          console.log("🔴 Acceso denegado por estado. Redirigiendo a /forbidden");
          return NextResponse.redirect(new URL("/forbidden", request.url));
        }
      }
    }

    console.log("🟢 Acceso permitido");
    return response;
  } catch (e) {
    console.error("🔴 Error en middleware:", e);
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};
