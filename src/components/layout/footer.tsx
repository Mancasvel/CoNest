"use client"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} CoNest. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="/terms" className="text-sm hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="/cookies" className="text-sm hover:text-white transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 