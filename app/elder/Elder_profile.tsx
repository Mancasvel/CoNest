"use client"

import type React from "react"
import { useState } from "react"
import { Chip, Card, CardHeader, CardBody, Divider, Button, Input, Textarea, Spinner, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react"
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
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(1)
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')

  const handleEditToggle = () => {
    if (isEditing) {
      // Si estamos cancelando la edición, restauramos los valores originales
      setEditedElder({ ...elder })
      setInterestsInput(elder.interests?.join(", ") || "")
    } else {
      // Abrimos el modal de edición
      setEditModalOpen(true)
      setActiveStep(1)
    }
    // Reset messages
    setErrorMessage("")
    setSuccessMessage("")
    setIsEditing(!isEditing)
  }

  const handleCloseEditModal = () => {
    setEditModalOpen(false)
    // Solo si estamos cerrando el modal sin guardar, resetear el estado de edición
    if (isEditing) {
      setIsEditing(false)
      setEditedElder({ ...elder })
      setInterestsInput(elder.interests?.join(", ") || "")
    }
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

  const handleProfilePhotoUpdate = (url: string) => {
    setEditedElder({
      ...editedElder,
      profile_photo: url,
    })
  }

  const handleApartmentPhotosUpdate = (urls: string[]) => {
    setEditedElder({
      ...editedElder,
      apartment_photos: urls,
    })
  }

  const goToNextStep = () => {
    setSlideDirection('left')
    setTimeout(() => {
      setActiveStep((prev) => prev + 1)
    }, 300)
  }

  const goToPrevStep = () => {
    setSlideDirection('right')
    setTimeout(() => {
      setActiveStep((prev) => prev - 1)
    }, 300)
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
        setShowSuccessAnimation(true)
        setSuccessMessage("Perfil actualizado correctamente")
        // Exit edit mode after a short delay to show the success message
        setTimeout(() => {
          setEditModalOpen(false)
          setIsEditing(false)
          // In a real implementation, the page would refresh with the updated data
          window.location.reload()
        }, 2000)
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

  const renderEditStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-center text-conest-darkGray">Datos Personales</h3>
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <ImageUpload
                  userId={elder.id}
                  currentImageUrl={editedElder.profile_photo}
                  onUploadComplete={handleProfilePhotoUpdate}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  variant="bordered"
                  size="lg"
                />
              </div>

              <div>
                <label htmlFor="monthly_rent" className="text-sm font-medium text-conest-darkGray">
                  Renta Mensual (€)
                </label>
                <Input
                  id="monthly_rent"
                  name="monthly_rent"
                  type="number"
                  value={editedElder.monthly_rent.toString()}
                  onChange={handleInputChange}
                  placeholder="Ej: 500"
                  className="w-full"
                  variant="bordered"
                  size="lg"
                />
              </div>

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
                  variant="bordered"
                  size="lg"
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
                  placeholder="Describe tu apartamento, comodidades, ubicación, etc."
                  className="w-full min-h-[100px]"
                  variant="bordered"
                  size="lg"
                />
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-center text-conest-darkGray">Fotos del Apartamento</h3>
            <p className="text-center text-conest-darkGray/70 text-sm">
              Sube fotos de tu apartamento para mostrarlo a los estudiantes
            </p>
            <div className="max-w-lg mx-auto">
              <MultiImageUpload
                userId={elder.id}
                currentImageUrls={editedElder.apartment_photos || []}
                onUploadComplete={handleApartmentPhotosUpdate}
              />
              <p className="text-xs text-conest-darkGray/60 mt-2 text-center">
                Puedes subir hasta 10 imágenes
              </p>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-center text-conest-darkGray">Tus Intereses</h3>
            <p className="text-center text-conest-darkGray/70 text-sm">
              Comparte tus intereses para encontrar un mejor match con un estudiante
            </p>
            <div className="max-w-lg mx-auto">
              <Textarea
                value={interestsInput}
                onChange={handleInterestsChange}
                placeholder="Música, Deportes, Lectura, etc. (separados por comas)"
                className="w-full min-h-[150px]"
                variant="bordered"
                size="lg"
              />
              <p className="text-xs text-conest-darkGray/60 mt-2 text-center">
                Ingresa tus intereses separados por comas
              </p>
            </div>
            <div className="bg-conest-lightBlue/20 rounded-xl p-4 mt-6">
              <h4 className="text-sm font-medium text-conest-darkGray mb-2">
                Ejemplos de intereses populares:
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Música", "Cine", "Cocina", "Arte", "Viajar", "Lectura", "Jardinería", "Historia", "Fotografía"].map((interest) => (
                  <Chip 
                    key={interest}
                    size="sm"
                    variant="flat"
                    className="bg-white/70 text-conest-darkGray text-xs cursor-pointer hover:bg-conest-blue/10 transition-colors"
                    onClick={() => {
                      const currentInterests = interestsInput
                        .split(",")
                        .map((i) => i.trim())
                        .filter((i) => i !== "")
                      
                      if (!currentInterests.includes(interest)) {
                        const newInterests = [...currentInterests, interest]
                        setInterestsInput(newInterests.join(", "))
                      }
                    }}
                  >
                    {interest}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-center text-conest-darkGray">Revisar Cambios</h3>
            <div className="bg-conest-lightBlue/10 rounded-xl p-6 space-y-4">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={editedElder.profile_photo || "/placeholder.svg"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-conest-darkGray/70">Dirección</h4>
                  <p className="text-conest-darkGray">{editedElder.apartment_address}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-conest-darkGray/70">Renta Mensual</h4>
                  <p className="text-conest-darkGray">€{editedElder.monthly_rent}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-conest-darkGray/70">Fecha de Nacimiento</h4>
                  <p className="text-conest-darkGray">{new Date(editedElder.birth_date).toLocaleDateString()}</p>
                </div>
              </div>
              
              <Divider className="my-4" />
              
              <div>
                <h4 className="text-xs font-semibold text-conest-darkGray/70">Descripción del Apartamento</h4>
                <p className="text-conest-darkGray text-sm">{editedElder.apartment_description || "No se ha proporcionado descripción"}</p>
              </div>
              
              <Divider className="my-4" />
              
              <div>
                <h4 className="text-xs font-semibold text-conest-darkGray/70 mb-2">Intereses</h4>
                <div className="flex flex-wrap gap-2">
                  {interestsInput
                    .split(",")
                    .map((item) => item.trim())
                    .filter((item) => item !== "")
                    .map((interest, index) => (
                      <Chip
                        key={index}
                        size="sm"
                        variant="flat"
                        className="bg-conest-lightBlue/20 text-conest-darkGray text-xs"
                      >
                        {interest}
                      </Chip>
                    ))}
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-8 bg-gradient-to-br from-conest-lightBlue/10 to-white p-8">


      {successMessage && !editModalOpen && (
        <div className="p-3 mb-4 bg-green-100 border border-green-200 text-green-700 rounded-lg max-w-7xl mx-auto w-full">
          {successMessage}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto w-full">
        {/* Card del perfil */}
        <div className="md:w-1/3">
          <Card className="shadow-medium border-none h-full relative w-full rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-col items-center bg-gradient-to-r from-conest-blue to-conest-mediumBlue p-6 rounded-t-2xl">
              <div className="relative w-32 h-32 mb-4">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
                  {elder.profile_photo ? (
                    <img
                      src={elder.profile_photo}
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
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-conest-darkGray mb-2">Dirección del Apartamento</h4>
                  <p className="text-conest-darkGray">{elder.apartment_address}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-conest-darkGray mb-2">Renta Mensual</h4>
                  <p className="text-conest-darkGray">€{elder.monthly_rent}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-conest-darkGray mb-2">Fecha de Nacimiento</h4>
                  <p className="text-conest-darkGray">{new Date(elder.birth_date).toLocaleDateString()}</p>
                </div>
              </div>

              <Divider className="my-4" />

              {/* Sección de Intereses */}
              <div>
                <h4 className="text-md font-semibold text-conest-darkGray mb-4 text-center">Intereses</h4>
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
              </div>
            </CardBody>
            <div className="p-4 bg-gray-50 flex justify-center">
              <Button
                color="primary"
                className="bg-gradient-to-r from-conest-blue to-conest-mediumBlue hover:opacity-90 transition-all rounded-full text-white w-full max-w-xs"
                onClick={handleEditToggle}
                startContent={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                }
              >
                Editar Perfil
              </Button>
            </div>
          </Card>
        </div>

        {/* Información del apartamento */}
        <div className="md:w-2/3">
          <Card className="shadow-medium border-none h-full relative w-full rounded-2xl overflow-hidden">
            <CardHeader className="flex justify-between items-center bg-gradient-to-r from-conest-lightBlue/80 to-conest-lightBlue/30 p-6 rounded-t-2xl">
              <h3 className="text-xl font-bold text-conest-darkGray">Apartamento</h3>
              <Chip size="sm" variant="flat" color="primary">Publicado</Chip>
            </CardHeader>
            <CardBody className="p-6">
              <div className="mb-6">
                <h4 className="text-md font-semibold text-conest-darkGray mb-3">Descripción</h4>
                {elder.apartment_description ? (
                  <p className="text-conest-darkGray text-sm">{elder.apartment_description}</p>
                ) : (
                  <p className="text-conest-darkGray/60 text-sm italic">No se ha proporcionado descripción</p>
                )}
              </div>

              <Divider className="my-6" />

              <div>
                <h4 className="text-md font-semibold text-conest-darkGray mb-4">Fotos</h4>
                {elder.apartment_photos && elder.apartment_photos.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {elder.apartment_photos.map((photo, index) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden border border-gray-200">
                        <img 
                          src={photo} 
                          alt={`Apartamento ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400 mx-auto mb-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <p className="text-gray-500">No hay fotos del apartamento</p>
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Modal de edición de perfil */}
      <Modal
        isOpen={editModalOpen}
        onClose={handleCloseEditModal}
        size="3xl"
        scrollBehavior="inside"
        placement="center"
        className="bg-gradient-to-r from-conest-lightBlue/5 to-white"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white rounded-t-2xl">
                <h2 className="text-xl font-bold">Editar Perfil</h2>
                {/* Indicador de progreso */}
                <div className="w-full mt-6 mb-2 relative">
                  {/* Círculos indicadores */}
                  <div className="relative flex justify-between">
                    {[1, 2, 3, 4].map((step) => (
                      <div 
                        key={step} 
                        className="flex flex-col items-center"
                        onClick={() => !isSaving && setActiveStep(step)}
                      >
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer z-10
                            ${activeStep >= step ? 'bg-white text-conest-blue' : 'bg-white/30 text-white'}
                            ${activeStep === step ? 'ring-2 ring-white' : ''}
                            transition-all duration-300
                          `}
                        >
                          {step}
                        </div>
                        <span className="text-xs text-white/80 mt-1">
                          {step === 1 ? 'Datos' : step === 2 ? 'Fotos' : step === 3 ? 'Intereses' : 'Revisar'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Línea de progreso */}
                  <div className="absolute top-4 left-0 right-0 h-0.5 bg-white/30">
                    <div 
                      className="h-full bg-white transition-all duration-500" 
                      style={{ width: `${(activeStep - 1) * 33.33}%` }}
                    ></div>
                  </div>
                </div>
              </ModalHeader>
              
              <ModalBody className="p-6 bg-white/95 backdrop-blur-sm">
                {showSuccessAnimation ? (
                  <div className="flex flex-col items-center justify-center py-10">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-conest-darkGray">{successMessage}</h3>
                    <p className="text-sm text-conest-darkGray/60 mt-2">Redirigiendo...</p>
                  </div>
                ) : (
                  <div className={`transition-all duration-300 transform ${slideDirection === 'left' ? '-translate-x-4 opacity-0' : slideDirection === 'right' ? 'translate-x-4 opacity-0' : ''}`} 
                    onTransitionEnd={() => setSlideDirection('' as 'left' | 'right')} 
                    style={{ minHeight: '400px' }}>
                    {renderEditStepContent()}
                  </div>
                )}
              </ModalBody>
              
              <ModalFooter className="bg-gray-50 border-t border-gray-100">
                {!showSuccessAnimation && (
                  <div className="w-full flex justify-between">
                    {activeStep > 1 ? (
                      <Button 
                        variant="light" 
                        onClick={goToPrevStep} 
                        disabled={isSaving}
                      >
                        Anterior
                      </Button>
                    ) : (
                      <Button 
                        variant="light" 
                        onClick={handleCloseEditModal}
                        disabled={isSaving}
                      >
                        Cancelar
                      </Button>
                    )}
                    
                    {activeStep < 4 ? (
                      <Button 
                        color="primary" 
                        onClick={goToNextStep}
                        disabled={isSaving}
                      >
                        Siguiente
                      </Button>
                    ) : (
                      <Button 
                        color="primary" 
                        onClick={handleSaveProfile}
                        disabled={isSaving}
                      >
                        {isSaving ? (
                          <>
                            <Spinner size="sm" color="current" className="mr-2" /> 
                            Guardando...
                          </>
                        ) : (
                          "Guardar Perfil"
                        )}
                      </Button>
                    )}
                  </div>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ElderProfile

