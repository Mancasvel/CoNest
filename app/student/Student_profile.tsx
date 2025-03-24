"use client";

import React from "react";
import { Chip, Card, CardHeader, CardBody, Divider, Button, Tooltip } from "@heroui/react";

// Definir tipos para las propiedades de `StudentProfile`
interface StudentProfileProps {
  student: {
    profile_photo: string | null;
    university: string;
    course: string;
    birth_date: string;
    interests: string[] | null;
    status: "active" | "paused" | "vacation" | "matchmaking";
  };
  user: {
    email: string;
  };
}

const statusColorMap: Record<string, "success" | "danger" | "warning" | "primary"> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
  matchmaking: "primary"
};

const StudentProfile: React.FC<StudentProfileProps> = ({ student, user }) => {
  // Función para validar URLs de imágenes
  const getValidImageUrl = (url: string | null): string | undefined => {
    if (!url) return undefined;
    if (url.startsWith('http') || url.startsWith('data:')) {
      return url;
    }
    return url;
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-8 bg-gradient-to-br from-conest-lightBlue/10 to-white">
      <h2 className="font-bold text-3xl text-conest-darkGray">Perfil de Estudiante</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columna izquierda - Foto de perfil e info básica */}
        <div className="md:col-span-1">
          <Card className="shadow-soft border-none h-full relative">
            <CardHeader className="flex flex-col items-center bg-gradient-to-r from-conest-blue to-conest-mediumBlue p-6">
              <div className="relative w-32 h-32 mb-4">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
                  {student.profile_photo ? (
                    <img
                      src={getValidImageUrl(student.profile_photo)}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex justify-center items-center bg-gray-200 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                  )}
                </div>
                <Tooltip content="Editar foto de perfil">
                  <Button isIconOnly size="sm" radius="full" className="absolute bottom-0 right-0 bg-white text-conest-blue shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </Button>
                </Tooltip>
              </div>
              <h3 className="text-xl font-bold text-white">Estudiante</h3>
              <Chip 
                className="capitalize mt-2 text-conest-white" 
                color={statusColorMap[student.status] || "default"}
                size="sm" 
                variant="flat"
              >
                {student.status}
              </Chip>
            </CardHeader>

            <CardBody className="p-6">
            <Button 
                    color="primary" 
                    variant="light" 
                    className="text-conest-blue "
                    size="sm"
                  >
                    Editar Perfil
                  </Button>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-conest-darkGray/60 mb-1">Email</p>
                  <p className="font-medium text-conest-darkGray">{user.email}</p>
                </div>
                
                <Divider className="my-2" />
                
                <div>
                  <p className="text-sm text-conest-darkGray/60 mb-1">Universidad</p>
                  <p className="font-medium text-conest-darkGray">{student.university}</p>
                </div>
                
                <Divider className="my-2" />
                
                <div>
                  <p className="text-sm text-conest-darkGray/60 mb-1">Curso</p>
                  <p className="font-medium text-conest-darkGray">{student.course}</p>
                </div>
                
                <Divider className="my-2" />
                
                <div>
                  <p className="text-sm text-conest-darkGray/60 mb-1">Fecha de Nacimiento</p>
                  <p className="font-medium text-conest-darkGray">
                    {new Date(student.birth_date).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-8">
                  
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        
        {/* Columna derecha - Información detallada */}
        <div className="md:col-span-2">
          <Card className="shadow-soft border-none h-full relative">
            <CardHeader className="bg-gradient-to-r from-conest-lightBlue/30 to-conest-lightBlue/10 p-4">
              <h3 className="text-xl font-bold text-conest-darkGray">Información Personal</h3>
            </CardHeader>
            
            <CardBody className="p-6">
              {/* Sección de Intereses */}
              <div className="mb-6 relative">
                <h4 className="text-md font-semibold text-conest-darkGray mb-2">Intereses</h4>
                <div className="flex flex-wrap gap-1">
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
            <Card className="shadow-soft border-none mt-6 relative">
            <CardHeader className="bg-gradient-to-r from-conest-lightBlue/30 to-conest-lightBlue/10 p-4">
              <h3 className="text-xl font-bold text-conest-darkGray">Actividad Reciente</h3>
            </CardHeader>
            
            <CardBody className="p-6">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-conest-lightBlue/10 border border-conest-lightBlue/20 relative">
                <div className="p-2 bg-conest-blue/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-conest-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-conest-darkGray">Perfil creado exitosamente</p>
                  <p className="text-xs text-conest-darkGray/60">Ya puedes comenzar a buscar apartamentos</p>
                </div>
              </div>
            </CardBody>
          </Card>
          </Card>
          
          
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
