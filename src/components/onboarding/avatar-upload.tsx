"use client"

import { useState, useRef } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"

interface AvatarUploadProps {
  userId: string
  onUploadComplete: (url: string) => void
  currentAvatarUrl?: string | null
}

export function AvatarUpload({
  userId,
  onUploadComplete,
  currentAvatarUrl,
}: AvatarUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(currentAvatarUrl)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validar tipo de archivo
    if (!file.type.startsWith("image/")) {
      setError("Por favor selecciona una imagen")
      return
    }

    // Validar tamaño (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("La imagen debe ser menor a 5MB")
      return
    }

    try {
      setIsUploading(true)
      setError(null)

      // Crear URL para preview
      const objectUrl = URL.createObjectURL(file)
      setPreview(objectUrl)

      // Subir a Supabase Storage
      const fileExt = file.name.split(".").pop()
      const filePath = `${userId}/avatar.${fileExt}`

      const { error: uploadError, data } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true })

      if (uploadError) throw uploadError

      // Obtener URL pública
      const {
        data: { publicUrl },
      } = supabase.storage.from("avatars").getPublicUrl(filePath)

      onUploadComplete(publicUrl)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al subir la imagen")
      setPreview(currentAvatarUrl)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className="relative w-32 h-32 rounded-full overflow-hidden bg-secondary cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        {preview ? (
          <Image
            src={preview}
            alt="Avatar preview"
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
        disabled={isUploading}
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="text-sm text-primary hover:underline"
        disabled={isUploading}
      >
        {isUploading ? "Subiendo..." : "Cambiar foto"}
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
} 