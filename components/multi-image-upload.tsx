"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Loader2, Upload, X } from "lucide-react"

interface MultiImageUploadProps {
  userId: string
  currentImageUrls: string[] | null
  onUploadComplete: (urls: string[]) => void
  maxFiles?: number
}

export default function MultiImageUpload({
  userId,
  currentImageUrls,
  onUploadComplete,
  maxFiles = 10,
}: MultiImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [previewUrls, setPreviewUrls] = useState<string[]>(currentImageUrls || [])
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    
    if (!files.length) return

    try {
      setErrorMsg(null)

      // Validate total files count
      if (previewUrls.length + files.length > maxFiles) {
        throw new Error(`Puedes subir un máximo de ${maxFiles} imágenes.`)
      }

      // Validate each file
      for (const file of files) {
        if (file.size > 5 * 1024 * 1024) {
          throw new Error(`La imagen ${file.name} es demasiado grande. El tamaño máximo es 5MB.`)
        }
        if (!file.type.startsWith("image/")) {
          throw new Error(`El archivo ${file.name} debe ser una imagen.`)
        }
      }

      // Show previews immediately
      const newPreviewUrls = files.map(file => URL.createObjectURL(file))
      setPreviewUrls(prev => [...prev, ...newPreviewUrls])

      setIsUploading(true)

      // Upload all files
      const uploadPromises = files.map(async (file) => {
        const fileExt = file.name.split(".").pop()
        const fileName = `${userId}-${Math.random().toString(36).substring(2)}.${fileExt}`

        const formData = new FormData()
        formData.append("file", file)
        formData.append("fileName", fileName)
        formData.append("userId", userId)

        const response = await fetch("/api/upload-image", {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Error al subir la imagen")
        }

        return response.json()
      })

      const results = await Promise.all(uploadPromises)
      const newUrls = results.map(result => result.publicUrl)
      
      // Combine with existing URLs and update
      const allUrls = [...(currentImageUrls || []), ...newUrls]
      onUploadComplete(allUrls)
      
    } catch (error: any) {
      console.error("Error uploading images:", error)
      setErrorMsg(error.message || "Error al subir las imágenes. Inténtalo de nuevo.")
      // Revert to previous images if there was an error
      setPreviewUrls(currentImageUrls || [])
    } finally {
      setIsUploading(false)
    }
  }

  const handleRemoveImage = useCallback((index: number) => {
    const newUrls = [...previewUrls]
    newUrls.splice(index, 1)
    setPreviewUrls(newUrls)
    onUploadComplete(newUrls)
  }, [previewUrls, onUploadComplete])

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {previewUrls.map((url, index) => (
          <div key={index} className="relative aspect-square group">
            <img 
              src={url} 
              alt={`Apartamento ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg border-2 border-conest-blue/20"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {previewUrls.length < maxFiles && (
          <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-conest-blue transition-colors">
            {isUploading ? (
              <Loader2 className="w-8 h-8 text-conest-blue animate-spin" />
            ) : (
              <>
                <Upload className="w-6 h-6 text-gray-400 mb-1" />
                <span className="text-sm text-gray-500">Subir fotos</span>
                <span className="text-xs text-gray-400">Máx. {maxFiles}</span>
              </>
            )}
            <input
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              disabled={isUploading || previewUrls.length >= maxFiles}
            />
          </label>
        )}
      </div>

      {errorMsg && <div className="text-red-500 text-sm text-center">{errorMsg}</div>}
      
      {previewUrls.length > 0 && (
        <div className="text-xs text-gray-500 text-center">
          {previewUrls.length} {previewUrls.length === 1 ? 'imagen' : 'imágenes'} subidas
        </div>
      )}
    </div>
  )
}