"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 h-96 flex flex-col shadow-lg">
          <div className="flex items-center justify-between p-3 border-b">
            <h3 className="font-medium">Chat Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 p-4 flex items-center justify-center">
            <div className="text-center">
              <p className="mb-4">Need help with something?</p>
              <Link href="/chat">
                <Button>Start chatting</Button>
              </Link>
            </div>
          </div>
        </Card>
      ) : (
        <Button size="icon" className="h-12 w-12 rounded-full shadow-lg" onClick={() => setIsOpen(true)}>
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

