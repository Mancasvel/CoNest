"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import Link from "next/link"

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 flex flex-col bg-white shadow-xl rounded-xl border border-conest-lightBlue/20 overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white">
            <h3 className="font-semibold">Asistente Virtual CoNest</h3>
            <button 
              className="p-1.5 rounded-full hover:bg-white/20 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 p-6 flex items-center justify-center bg-gradient-to-br from-conest-lightBlue/5 to-white">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-conest-lightBlue/20 flex items-center justify-center text-conest-blue text-3xl">
                <span>🤖</span>
              </div>
              <h4 className="text-conest-darkGray font-medium mb-2">¿Necesitas ayuda?</h4>
              <p className="text-sm text-conest-darkGray/70 mb-6">
                Nuestro asistente virtual está listo para responder todas tus preguntas.
              </p>
              <Link href="/chat">
                <button className="bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-soft flex items-center justify-center w-full">
                  <MessageSquare className="h-4 w-4 mr-2" /> Iniciar chat
                </button>
              </Link>
            </div>
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
