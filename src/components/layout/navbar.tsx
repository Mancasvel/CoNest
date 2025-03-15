"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSectionClick = (section: string) => {
    window.location.href = `/#${section}`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            CoNest
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleSectionClick("benefits")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Beneficios
            </button>
            <button
              onClick={() => handleSectionClick("how-it-works")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => handleSectionClick("testimonials")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <button
              onClick={() => handleSectionClick("faq")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => handleSectionClick("contact")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleSectionClick("benefits")}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Beneficios
              </button>
              <button
                onClick={() => handleSectionClick("how-it-works")}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Cómo Funciona
              </button>
              <button
                onClick={() => handleSectionClick("testimonials")}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Testimonios
              </button>
              <button
                onClick={() => handleSectionClick("faq")}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => handleSectionClick("contact")}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Contacto
              </button>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/register">Registrarse</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 