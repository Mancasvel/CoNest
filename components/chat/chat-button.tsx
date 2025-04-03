"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./chat-button.module.css"

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.container}>
      {isOpen ? (
        <div className={styles.popup}>
          <div className={styles.popupHeader}>
            <h3 className={styles.popupTitle}>Asistente Virtual</h3>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          <div className={styles.popupContent}>
            <p>¿Necesitas ayuda con algo?</p>
            <Link href="/chat" className={styles.chatLink}>
              Iniciar chat
            </Link>
          </div>
        </div>
      ) : (
        <button className={styles.chatButton} onClick={() => setIsOpen(true)} aria-label="Abrir chat">
          💬
        </button>
      )}
    </div>
  )
}

