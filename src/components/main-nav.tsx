import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <Link
        href="/"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Inicio
      </Link>
      <Link
        href="/about"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Nosotros
      </Link>
      <Link
        href="/how-it-works"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/how-it-works" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Cómo funciona
      </Link>
      <Link
        href="/contact"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/contact" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Contacto
      </Link>
    </nav>
  )
} 