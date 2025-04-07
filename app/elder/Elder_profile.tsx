"use client"

import type React from "react"
import { useState } from "react"
import { Chip, Card, CardHeader, CardBody, Divider, Button, Input, Textarea, Spinner } from "@heroui/react"
import { updateElderProfile } from "./update_action"
import ImageUpload from "../../components/image-upload"
import MultiImageUpload from "../../components/multi-image-upload"

// Definir tipos para las propiedades del perfil
interface ElderProfileProps {
  elder: {
    id: string
    profile_photo: string | null
    apartment_address: string
    apartment_description: string | null
    monthly_rent: number
    birth_date: string
    interests: string[] | null
    apartment_photos: string[] | null
    status: "REGISTERED" | "MATCHMAKING" | "MATCHED" | "RENTED"
  }
  user: {
    email: string
  }
}

const statusColorMap: Record<string, "success" | "danger" | "warning" | "primary"> = {
  REGISTERED: "warning",
  MATCHMAKING: "primary",
  MATCHED: "success",
  RENTED: "success",
}

const ElderProfile: React.FC<ElderProfileProps> = ({ elder, user }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedElder, setEditedElder] = useState({ ...elder })
  const [interestsInput, setInterestsInput] = useState(elder.interests?.join(", ") || "")
  const [isSaving, setIsSaving] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")



  const handleEditToggle = () => {
    if (isEditing) {
      // Si estamos cancelando la edición, restauramos los valores originales
      setEditedElder({ ...elder })
      setInterestsInput(elder.interests?.join(", ") || "")
      setApartmentPhotosInput(elder.apartment_photos?.join(", ") || "")
    }
    // Reset messages
    setErrorMessage("")
    setSuccessMessage("")
    setIsEditing(!isEditing)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Manejo especial para monthly_rent para convertirlo a número
    if (name === "monthly_rent") {
      setEditedElder({
        ...editedElder,
        [name]: Number.parseFloat(value) || 0,
      })
    } else {
      setEditedElder({
        ...editedElder,
        [name]: value,
      })
    }
  }

  const handleInterestsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInterestsInput(e.target.value)
  }

  const handleSaveProfile = async () => {
    try {
      setIsSaving(true)
      setErrorMessage("")

      // Parse interests from comma-separated string to array
      const interestsArray = interestsInput
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "")

      const profileData = {
        profile_photo: editedElder.profile_photo,
        apartment_address: editedElder.apartment_address,
        apartment_description: editedElder.apartment_description,
        monthly_rent: editedElder.monthly_rent,
        birth_date: editedElder.birth_date,
        interests: interestsArray.length > 0 ? interestsArray : null,
        apartment_photos: editedElder.apartment_photos || null,
      }

      // Call the server action to update the profile
      const result = await updateElderProfile(elder.id, profileData)

      if (result.success) {
        setSuccessMessage("Perfil actualizado correctamente")
        // Exit edit mode after a short delay to show the success message
        setTimeout(() => {
          setIsEditing(false)
          // In a real implementation, the page would refresh with the updated data
          window.location.reload()
        }, 1500)
      } else {
        setErrorMessage(result.error || "Error al actualizar el perfil")
      }
    } catch (error) {
      console.error("Error saving profile:", error)
      setErrorMessage("Error al guardar los cambios")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 right-0 top-0 h-[500px] bg-gradient-to-br from-conest-lightBlue/20 via-white to-white transform -skew-y-6"></div>
        <div className="absolute left-0 right-0 bottom-0 h-[300px] bg-gradient-to-tr from-conest-blue/5 via-white to-white transform skew-y-6"></div>
      </div>

      <div className="relative flex-1 w-full flex flex-col gap-8 px-4 py-8 sm:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
          <h2 className="font-bold text-3xl text-conest-darkGray">Perfil de Adulto Mayor</h2>
          <Button
            color={isEditing ? "danger" : "primary"}
            variant={isEditing ? "light" : "solid"}
            onClick={handleEditToggle}
            disabled={isSaving}
          >
            {isEditing ? "Cancelar" : "Editar Perfil"}
          </Button>
        </div>

        {errorMessage && (
          <div className="p-3 mb-4 bg-red-100 border border-red-200 text-red-700 rounded-lg max-w-7xl mx-auto w-full">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="p-3 mb-4 bg-green-100 border border-green-200 text-green-700 rounded-lg max-w-7xl mx-auto w-full">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          {/* Columna izquierda - Foto de perfil e info básica */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <Card className="shadow-soft border-none h-full relative w-full max-w-sm rounded-2xl">
              <CardHeader className="flex flex-col items-center bg-gradient-to-r from-conest-blue to-conest-mediumBlue p-6 rounded-t-2xl">
                <div className="relative w-32 h-32 mb-4">
                  {isEditing ? (
                    <ImageUpload
                      userId={elder.id}
                      currentImageUrl={elder.profile_photo}
                      onUploadComplete={(url) => {
                        setEditedElder({
                          ...editedElder,
                          profile_photo: url,
                        })
                      }}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
                      {editedElder.profile_photo ? (
                        <img
                          src={editedElder.profile_photo || "/placeholder.svg"}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
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
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">Adulto Mayor</h3>
                <Chip
                  className="capitalize mt-2"
                  color={statusColorMap[elder.status] || "default"}
                  size="sm"
                  variant="flat"
                >
                  {elder.status}
                </Chip>
              </CardHeader>

              <CardBody className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-conest-darkGray/60 mb-1 text-center">Email</p>
                    <p className="font-medium text-conest-darkGray text-center">{user.email}</p>
                  </div>

                  <Divider className="my-2" />

                  <div>
                    <p className="text-sm text-conest-darkGray/60 mb-1 text-center">Dirección del Apartamento</p>
                    <p className="font-medium text-conest-darkGray text-center">{elder.apartment_address}</p>
                  </div>

                  <Divider className="my-2" />

                  <div>
                    <p className="text-sm text-conest-darkGray/60 mb-1 text-center">Alquiler Mensual</p>
                    <p className="font-medium text-conest-darkGray text-center">€{elder.monthly_rent}</p>
                  </div>

                  <Divider className="my-2" />

                  <div>
                    <p className="text-sm text-conest-darkGray/60 mb-1 text-center">Fecha de Nacimiento</p>
                    <p className="font-medium text-conest-darkGray text-center">
                      {new Date(elder.birth_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Fotos del apartamento */}
            <Card className="shadow-soft border-none relative w-full max-w-sm rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-conest-lightBlue/30 to-conest-lightBlue/10 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-conest-darkGray text-center">Fotos del Apartamento</h3>
              </CardHeader>

              <CardBody className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {elder.apartment_photos && elder.apartment_photos.length > 0 ? (
                    elder.apartment_photos.map((photo, index) => (
                      <div key={index} className="aspect-square relative group">
                        <img
                          src={photo || "/placeholder.svg"}
                          alt={`Apartamento ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg border-2 border-conest-blue/20 transition-transform group-hover:scale-105"
                        />
                      </div>
                    ))
                  ) : (
                    <p className="text-conest-darkGray/60 text-sm col-span-2 text-center">No hay fotos registradas</p>
                  )}
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Columna derecha - Información detallada */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Card className="shadow-soft border-none relative rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-conest-lightBlue/30 to-conest-lightBlue/10 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-conest-darkGray text-center">Información Personal</h3>
              </CardHeader>

              <CardBody className="p-6">
                {isEditing ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="birth_date" className="text-sm font-medium text-conest-darkGray">
                        Fecha de Nacimiento
                      </label>
                      <Input
                        id="birth_date"
                        name="birth_date"
                        type="date"
                        value={editedElder.birth_date}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="apartment_address" className="text-sm font-medium text-conest-darkGray">
                        Dirección del Apartamento
                      </label>
                      <Input
                        id="apartment_address"
                        name="apartment_address"
                        value={editedElder.apartment_address}
                        onChange={handleInputChange}
                        placeholder="Dirección completa del apartamento"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="monthly_rent" className="text-sm font-medium text-conest-darkGray">
                        Alquiler Mensual (€)
                      </label>
                      <Input
                        id="monthly_rent"
                        name="monthly_rent"
                        type="number"
                        value={editedElder.monthly_rent.toString()}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="apartment_description" className="text-sm font-medium text-conest-darkGray">
                        Descripción del Apartamento
                      </label>
                      <Textarea
                        id="apartment_description"
                        name="apartment_description"
                        value={editedElder.apartment_description || ""}
                        onChange={handleInputChange}
                        placeholder="Describe tu apartamento..."
                        className="w-full"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-conest-darkGray mb-2">Fecha de Nacimiento</h4>
                      <p className="text-conest-darkGray">{new Date(elder.birth_date).toLocaleDateString()}</p>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="text-sm font-semibold text-conest-darkGray mb-2">Dirección del Apartamento</h4>
                      <p className="text-conest-darkGray">{elder.apartment_address}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-conest-darkGray mb-2">Alquiler Mensual</h4>
                      <p className="text-conest-darkGray">€{elder.monthly_rent}</p>
                    </div>

                    {elder.apartment_description && (
                      <div className="md:col-span-2">
                        <h4 className="text-sm font-semibold text-conest-darkGray mb-2">Descripción del Apartamento</h4>
                        <p className="text-conest-darkGray">{elder.apartment_description}</p>
                      </div>
                    )}
                  </div>
                )}

                <Divider className="my-4" />

                {/* Sección de Intereses */}
                <div className="mb-6 relative">
                  <h4 className="text-md font-semibold text-conest-darkGray mb-4 text-center">Intereses</h4>
                  {isEditing ? (
                    <div className="max-w-lg mx-auto">
                      <Textarea
                        value={interestsInput}
                        onChange={handleInterestsChange}
                        placeholder="Música, Deportes, Lectura, etc. (separados por comas)"
                        className="w-full"
                      />
                      <p className="text-xs text-conest-darkGray/60 mt-2 text-center">
                        Ingresa tus intereses separados por comas
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2 justify-center">
                      {elder.interests && elder.interests.length > 0 ? (
                        elder.interests.map((interest, index) => (
                          <Chip
                            key={index}
                            size="sm"
                            variant="flat"
                            className="bg-conest-lightBlue/20 text-conest-darkGray text-xs"
                          >
                            {interest}
                          </Chip>
                        ))
                      ) : (
                        <p className="text-conest-darkGray/60 text-sm">No hay intereses registrados</p>
                      )}
                    </div>
                  )}
                </div>

                <Divider className="my-4" />

                {/* Sección de Fotos del Apartamento */}
                <div className="mb-6 relative">
                  <h4 className="text-md font-semibold text-conest-darkGray mb-4 text-center">
                    URLs de Fotos del Apartamento
                  </h4>
                  {isEditing ? (
                    <div className="mb-6 relative">
                      <h4 className="text-md font-semibold text-conest-darkGray mb-4 text-center">
                        Fotos del Apartamento
                      </h4>
                      <MultiImageUpload
                        userId={elder.id}
                        currentImageUrls={elder.apartment_photos || []}
                        onUploadComplete={(urls) => {
                          setEditedElder({
                            ...editedElder,
                            apartment_photos: urls.length > 0 ? urls : null,
                          })
                        }}
                      />
                    </div>
                  ) : (
                    <div className="mb-6 relative">
                      <h4 className="text-md font-semibold text-conest-darkGray mb-4 text-center">
                        Fotos del Apartamento
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {elder.apartment_photos && elder.apartment_photos.length > 0 ? (
                          elder.apartment_photos.map((photo, index) => (
                            <div key={index} className="aspect-square relative">
                              <img
                                src={photo}
                                alt={`Apartamento ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg border-2 border-conest-blue/20"
                              />
                            </div>
                          ))
                        ) : (
                          <p className="text-conest-darkGray/60 text-sm col-span-2 text-center">
                            No hay fotos registradas
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {isEditing && (
                  <div className="flex justify-center mt-6">
                    <Button color="primary" className="w-full max-w-md" onClick={handleSaveProfile} disabled={isSaving}>
                      {isSaving ? <Spinner size="sm" color="white" /> : "Guardar Cambios"}
                    </Button>
                  </div>
                )}
              </CardBody>
            </Card>

            <Card className="shadow-soft border-none relative rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-conest-lightBlue/30 to-conest-lightBlue/10 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-conest-darkGray text-center">Actividad Reciente</h3>
              </CardHeader>

              <CardBody className="p-6">
                <div className="flex items-center justify-center gap-4 p-3 rounded-lg bg-conest-lightBlue/10 border border-conest-lightBlue/20 relative">
                  <div className="p-2 bg-conest-blue/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-conest-blue"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-conest-darkGray">Perfil creado exitosamente</p>
                    <p className="text-xs text-conest-darkGray/60">Ya puedes comenzar a recibir solicitudes</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElderProfile

