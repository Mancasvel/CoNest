"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Chip, Card, CardHeader, CardBody, Divider, Button, Input, Textarea, Spinner, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react"
import { updateStudentProfile } from "./update_action"
import ImageUpload from "../../components/image-upload"

// Definir tipos para las propiedades de `StudentProfile`
interface StudentProfileProps {
  student: {
    id: string
    profile_photo: string | null
    university: string
    course: string
    birth_date: string
    interests: string[] | null
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

const StudentProfile: React.FC<StudentProfileProps> = ({ student, user }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedStudent, setEditedStudent] = useState({ ...student })
  const [interestsInput, setInterestsInput] = useState(student.interests?.join(", ") || "")
  const [isSaving, setIsSaving] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(1)
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const handleEditToggle = () => {
    if (isEditing) {
      // Si estamos cancelando la edición, restauramos los valores originales
      setEditedStudent({ ...student })
      setInterestsInput(student.interests?.join(", ") || "")
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
      setEditedStudent({ ...student })
      setInterestsInput(student.interests?.join(", ") || "")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditedStudent({
      ...editedStudent,
      [name]: value,
    })
  }

  const handleInterestsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInterestsInput(e.target.value)
  }

  const handleProfilePhotoUpdate = (url: string) => {
    setEditedStudent({
      ...editedStudent,
      profile_photo: url,
    })
  }

  const goToNextStep = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setActiveStep((prev) => prev + 1);
    }, 300);
  }

  const goToPrevStep = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setActiveStep((prev) => prev - 1);
    }, 300);
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
        university: editedStudent.university,
        course: editedStudent.course,
        birth_date: editedStudent.birth_date,
        interests: interestsArray.length > 0 ? interestsArray : null,
        profile_photo: editedStudent.profile_photo,
      }

      // Call the server action to update the profile
      const result = await updateStudentProfile(student.id, profileData)

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
                  userId={student.id}
                  currentImageUrl={editedStudent.profile_photo}
                  onUploadComplete={handleProfilePhotoUpdate}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="university" className="text-sm font-medium text-conest-darkGray">
                  Universidad
                </label>
                <Input
                  id="university"
                  name="university"
                  value={editedStudent.university}
                  onChange={handleInputChange}
                  placeholder="Nombre de tu universidad"
                  className="w-full"
                  variant="bordered"
                  size="lg"
                />
              </div>

              <div>
                <label htmlFor="course" className="text-sm font-medium text-conest-darkGray">
                  Curso
                </label>
                <Input
                  id="course"
                  name="course"
                  value={editedStudent.course}
                  onChange={handleInputChange}
                  placeholder="Tu curso o carrera"
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
                  value={editedStudent.birth_date}
                  onChange={handleInputChange}
                  className="w-full"
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
            <h3 className="text-lg font-semibold text-center text-conest-darkGray">Tus Intereses</h3>
            <p className="text-center text-conest-darkGray/70 text-sm">
              Comparte tus intereses para encontrar un mejor match con un adulto mayor
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
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-center text-conest-darkGray">Revisar Cambios</h3>
            <div className="bg-conest-lightBlue/10 rounded-xl p-6 space-y-4">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={editedStudent.profile_photo || "/placeholder.svg"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-conest-darkGray/70">Universidad</h4>
                  <p className="text-conest-darkGray">{editedStudent.university}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-conest-darkGray/70">Curso</h4>
                  <p className="text-conest-darkGray">{editedStudent.course}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-conest-darkGray/70">Fecha de Nacimiento</h4>
                  <p className="text-conest-darkGray">{new Date(editedStudent.birth_date).toLocaleDateString()}</p>
                </div>
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
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg">
                {errorMessage}
              </div>
            )}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-8 bg-gradient-to-br from-conest-lightBlue/10 to-white p-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        <h2 className="font-bold text-3xl text-conest-darkGray">Perfil de Estudiante</h2>
      </div>

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
                  {student.profile_photo ? (
                    <img
                      src={student.profile_photo}
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
              <h3 className="text-xl font-bold text-white">Estudiante</h3>
              <Chip
                className="capitalize mt-2"
                color={statusColorMap[student.status] || "default"}
                size="sm"
                variant="flat"
              >
                {student.status}
              </Chip>
            </CardHeader>

            <CardBody className="p-6">
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-conest-darkGray mb-2">Universidad</h4>
                  <p className="text-conest-darkGray">{student.university}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-conest-darkGray mb-2">Curso</h4>
                  <p className="text-conest-darkGray">{student.course}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-conest-darkGray mb-2">Fecha de Nacimiento</h4>
                  <p className="text-conest-darkGray">{new Date(student.birth_date).toLocaleDateString()}</p>
                </div>
              </div>

              <Divider className="my-4" />

              {/* Sección de Intereses */}
              <div>
                <h4 className="text-md font-semibold text-conest-darkGray mb-4 text-center">Intereses</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {student.interests && student.interests.length > 0 ? (
                    student.interests.map((interest, index) => (
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

        {/* Notificaciones */}
        <div className="md:w-2/3">
          <Card className="shadow-medium border-none h-full relative w-full rounded-2xl overflow-hidden">
            <CardHeader className="flex justify-between items-center bg-gradient-to-r from-conest-lightBlue/80 to-conest-lightBlue/30 p-6 rounded-t-2xl">
              <h3 className="text-xl font-bold text-conest-darkGray">Notificaciones</h3>
              <Chip size="sm" variant="flat" color="primary">3 nuevas</Chip>
            </CardHeader>
            <CardBody className="p-0">
              <div className="divide-y divide-gray-100">
                {/* Notificación 1 */}
                <div className="p-4 hover:bg-gray-50 transition-colors flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-conest-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-medium text-conest-darkGray">Perfil completado</h4>
                      <span className="text-xs text-conest-darkGray/60">Hoy</span>
                    </div>
                    <p className="text-xs text-conest-darkGray/80 mt-1">
                      ¡Felicidades! Has completado tu perfil de estudiante. Ahora estás listo para comenzar el proceso de matchmaking.
                    </p>
                  </div>
                </div>
                
                {/* Notificación 2 */}
                <div className="p-4 hover:bg-gray-50 transition-colors flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-medium text-conest-darkGray">Proceso de Matchmaking Iniciado</h4>
                      <span className="text-xs text-conest-darkGray/60">Ayer</span>
                    </div>
                    <p className="text-xs text-conest-darkGray/80 mt-1">
                      Tu proceso de matchmaking ha comenzado. Te notificaremos cuando encontremos un adulto mayor compatible.
                    </p>
                  </div>
                </div>
                
                {/* Notificación 3 */}
                <div className="p-4 hover:bg-gray-50 transition-colors flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-medium text-conest-darkGray">Completa tus Intereses</h4>
                      <span className="text-xs text-conest-darkGray/60">Hace 2 días</span>
                    </div>
                    <p className="text-xs text-conest-darkGray/80 mt-1">
                      Para mejorar tus posibilidades de encontrar un buen match, te recomendamos completar tu lista de intereses.
                    </p>
                  </div>
                </div>
                
                {/* Notificación 4 */}
                <div className="p-4 hover:bg-gray-50 transition-colors flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-medium text-conest-darkGray">Bienvenido a CoNest</h4>
                      <span className="text-xs text-conest-darkGray/60">Hace 5 días</span>
                    </div>
                    <p className="text-xs text-conest-darkGray/80 mt-1">
                      ¡Bienvenido a la comunidad de CoNest! Estamos emocionados de tenerte con nosotros.
                    </p>
                  </div>
                </div>
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
                    {[1, 2, 3].map((step) => (
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
                          {step === 1 ? 'Datos' : step === 2 ? 'Intereses' : 'Revisar'}
                        </span>
                      </div>
                    ))}
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
                  <div className="transition-all duration-300" style={{ minHeight: '400px' }}>
                    {renderEditStepContent()}
                  </div>
                )}
              </ModalBody>
              <ModalFooter className="bg-gray-50 border-t border-gray-100 ">
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
                        onClick={onClose} 
                        disabled={isSaving}
                      >
                        Cancelar
                      </Button>
                    )}
                    
                    {activeStep < 3 ? (
                      <Button 
                        color="primary"
                        onClick={goToNextStep}
                        endContent={
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        }
                      >
                        Siguiente
                      </Button>
                    ) : (
                      <Button 
                        color="primary" 
                        className="bg-gradient-to-r from-conest-blue to-conest-mediumBlue text-white rounded-full"
                        onClick={handleSaveProfile} 
                        disabled={isSaving}
                      >
                        {isSaving ? (
                          <>
                            <Spinner size="sm" color="white" className="mr-2" />
                            Guardando...
                          </>
                        ) : (
                          "Guardar Cambios"
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
  );
}

export default StudentProfile;

