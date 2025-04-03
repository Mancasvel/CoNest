"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import Link from "next/link"

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-96 flex flex-col bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="flex items-center justify-between p-3 border-b">
            <h3 className="font-medium">Chat Assistant</h3>
            <button className="p-2" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 p-4 flex items-center justify-center">
            <div className="text-center">
              <p className="mb-4">Need help with something?</p>
              <Link href="/chat">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Start chatting</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <button className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600" onClick={() => setIsOpen(true)}>
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
