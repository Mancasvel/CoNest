"use client"

import type React from "react"
import { useState } from "react"
import { Chip, Card, CardHeader, CardBody, Divider, Button, Input, Textarea, Spinner } from "@heroui/react"
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

  const handleEditToggle = () => {
    if (isEditing) {
      // Si estamos cancelando la edición, restauramos los valores originales
      setEditedStudent({ ...student })
      setInterestsInput(student.interests?.join(", ") || "")
    }
    // Reset messages
    setErrorMessage("")
    setSuccessMessage("")
    setIsEditing(!isEditing)
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
    <div className="flex-1 w-full flex flex-col gap-8 bg-gradient-to-br from-conest-lightBlue/10 to-white p-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        <h2 className="font-bold text-3xl text-conest-darkGray">Perfil de Estudiante</h2>
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
        <div className="md:col-span-1 flex justify-center">
          <Card className="shadow-soft border-none h-full relative w-full max-w-sm rounded-2xl">
            <CardHeader className="flex flex-col items-center bg-gradient-to-r from-conest-blue to-conest-mediumBlue p-6 rounded-t-2xl">
              <div className="relative w-32 h-32 mb-4">
                {isEditing ? (
                  <ImageUpload
                    userId={student.id}
                    currentImageUrl={student.profile_photo}
                    onUploadComplete={handleProfilePhotoUpdate}
                  />
                ) : (
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
                    {editedStudent.profile_photo ? (
                      <img
                        src={editedStudent.profile_photo || "/placeholder.svg"}
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
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-conest-darkGray/60 mb-1 text-center">Email</p>
                  <p className="font-medium text-conest-darkGray text-center">{user.email}</p>
                </div>
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
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  <p className="text-xs text-conest-darkGray/60">Ya puedes comenzar a buscar apartamentos</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile

