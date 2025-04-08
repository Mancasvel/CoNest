"use client"

import type React from "react"

import { useState } from "react"
import { Loader2, Upload } from "lucide-react"

interface ImageUploadProps {
    userId: string
    currentImageUrl: string | null
    onUploadComplete: (url: string) => void
}

export default function ImageUpload({ userId, currentImageUrl, onUploadComplete }: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false)
    const [previewUrl, setPreviewUrl] = useState<string | null>(currentImageUrl)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        try {
            setErrorMsg(null)

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                throw new Error("La imagen es demasiado grande. El tamaño máximo es 5MB.")
            }

            // Validate file type
            if (!file.type.startsWith("image/")) {
                throw new Error("El archivo debe ser una imagen.")
            }

            // Show preview immediately
            const objectUrl = URL.createObjectURL(file)
            setPreviewUrl(objectUrl)

            setIsUploading(true)

            // Create a unique file path for the user
            const fileExt = file.name.split(".").pop()
            const fileName = `${userId}-${Math.random().toString(36).substring(2)}.${fileExt}`

            // Upload using the server action instead of direct client upload
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

            const data = await response.json()
            console.log("Upload successful:", data)

            // Call the callback with the new URL
            onUploadComplete(data.publicUrl)
        } catch (error: any) {
            console.error("Error uploading image:", error)
            setErrorMsg(error.message || "Error al subir la imagen. Inténtalo de nuevo.")
            // Revert to previous image if there was an error
            setPreviewUrl(currentImageUrl)
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/50 shadow-lg relative">
                {previewUrl ? (
                    <img src={previewUrl || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex justify-center items-center bg-gray-200 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-12 h-12"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    </div>
                )}
                {isUploading && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Loader2 className="w-8 h-8 text-white animate-spin" />
                    </div>
                )}
            </div>

            {errorMsg && <div className="text-red-500 text-xs text-center max-w-xs">{errorMsg}</div>}

            <div className="relative">
                <button className="relative overflow-hidden" disabled={isUploading}>
                    <Upload className="w-4 h-4 mr-2" />
                    {isUploading ? "Uploading..." : "Upload Photo"}
                    <input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={handleFileChange}
                        disabled={isUploading}
                    />
                </button>
            </div>
        </div>
    )
}

