"use client"

import { useState, useRef } from "react"
import { Image, File, X } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface AttachmentUploadProps {
  onUpload: (url: string, type: string, name: string) => void
  onCancel: () => void
}

export function AttachmentUpload({ onUpload, onCancel }: AttachmentUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const file = e.target.files?.[0]
      if (!file) return

      // Validar tamaño (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("El archivo no puede ser mayor a 5MB")
      }

      // Validar tipo
      if (!file.type.startsWith("image/")) {
        throw new Error("Solo se permiten imágenes")
      }

      setUploading(true)
      setError(null)

      // Crear preview para imágenes
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)

      // Subir archivo
      const fileExt = file.name.split(".").pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage
        .from("chat_attachments")
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // Obtener URL pública
      const { data: { publicUrl } } = supabase.storage
        .from("chat_attachments")
        .getPublicUrl(filePath)

      onUpload(publicUrl, file.type, file.name)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al subir el archivo")
      setPreview(null)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="relative">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {preview ? (
        <div className="relative">
          <img
            src={preview}
            alt="Preview"
            className="max-h-32 rounded-lg object-cover"
          />
          <button
            onClick={onCancel}
            className="absolute -right-2 -top-2 rounded-full bg-destructive p-1 text-destructive-foreground shadow-sm"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-accent"
        >
          <Image className="h-4 w-4" />
          <span>Adjuntar imagen</span>
        </button>
      )}

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
} 