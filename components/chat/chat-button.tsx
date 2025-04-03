"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageSquare, X } from "lucide-react"

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-white rounded-xl shadow-xl overflow-hidden border border-conest-lightBlue/20">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-conest-blue to-conest-mediumBlue">
            <h3 className="text-white font-semibold">Asistente Virtual</h3>
            <button 
              className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-6 bg-gradient-to-br from-conest-lightBlue/5 to-white">
            <p className="text-conest-darkGray mb-4 text-center">¿Necesitas ayuda con algo?</p>
            <Link href="/chat">
              <button className="w-full bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white py-2.5 px-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center shadow-soft">
                <MessageSquare className="h-4 w-4 mr-2" />
                Iniciar chat
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <button 
          className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white shadow-lg hover:opacity-90 transition-all" 
          onClick={() => setIsOpen(true)} 
          aria-label="Abrir chat"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

