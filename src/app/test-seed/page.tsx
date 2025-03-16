'use client'

import { createTestUser } from '@/lib/seed'
import { useState } from 'react'

export default function TestSeedPage() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleCreateTestUser = async () => {
    try {
      setError(null)
      setSuccess(false)
      const result = await createTestUser()
      console.log('Result:', result)
      setSuccess(true)
      alert('Usuario de prueba creado exitosamente')
    } catch (error) {
      console.error('Error:', error)
      setError(error instanceof Error ? error.message : 'Error desconocido')
      alert('Error al crear el usuario de prueba')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Crear Usuario de Prueba</h1>
      <button
        onClick={handleCreateTestUser}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
      >
        Crear Usuario
      </button>
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          Error: {error}
        </div>
      )}
      
      {success && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          Usuario creado exitosamente
        </div>
      )}
    </div>
  )
} 