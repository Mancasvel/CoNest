"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            CoNest
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#benefits" className="link">
              Benefits
            </Link>
            <Link href="#how-it-works" className="link">
              How It Works
            </Link>
            <Link href="#testimonials" className="link">
              Testimonials
            </Link>
            <Link href="#faq" className="link">
              FAQ
            </Link>
            <Link href="#contact" className="link">
              Contact
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="btn-ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="btn-primary" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 link"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t border-light">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#benefits" 
                className="link"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link 
                href="#how-it-works" 
                className="link"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#testimonials" 
                className="link"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="#faq" 
                className="link"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="#contact" 
                className="link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-light">
                <Button variant="ghost" className="w-full mb-2 btn-ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button className="w-full btn-primary" asChild>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 