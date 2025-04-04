"use client";

import React from "react";
import { Chip, Card, CardHeader, CardBody, Divider, Button, Tooltip } from "@heroui/react";

// Definir tipos para las propiedades del perfil
interface ElderProfileProps {
  elder: {
    profile_photo: string | null;
    apartment_address: string;
    monthly_rent: number;
    birth_date: string;
    interests: string[] | null;
    apartment_photos: string[] | null;
    apartment_description?: string;
    amenities?: string[] | null;
    house_rules?: string[] | null;
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

const ElderProfile: React.FC<ElderProfileProps> = ({ elder, user }) => {
  // Función para validar URLs de imágenes
  const getValidImageUrl = (url: string | null): string | undefined => {
    if (!url) return undefined;
    if (url.startsWith('http') || url.startsWith('data:')) {
      return url;
    }
    return url;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 right-0 top-0 h-[500px] bg-gradient-to-br from-conest-lightBlue/20 via-white to-white transform -skew-y-6"></div>
        <div className="absolute left-0 right-0 bottom-0 h-[300px] bg-gradient-to-tr from-conest-blue/5 via-white to-white transform skew-y-6"></div>
      </div>
      
      <div className="relative flex-1 w-full flex flex-col gap-8 px-4 py-8 sm:px-8">
        <h2 className="font-bold text-3xl text-conest-darkGray text-center">Perfil</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          {/* Columna izquierda - Foto de perfil e info básica */}
          <div className="md:col-span-1 flex justify-center">
            <Card className="shadow-soft border-none h-full relative w-full max-w-sm rounded-2xl">
              <CardHeader className="flex flex-col items-center bg-gradient-to-r from-conest-blue to-conest-mediumBlue p-6 rounded-t-2xl">
                <div className="relative w-32 h-32 mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
                    {elder.profile_photo ? (
                      <img
                        src={getValidImageUrl(elder.profile_photo)}
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
                <div className="flex justify-center mb-4">
                  <Button 
                    color="primary" 
                    variant="light" 
                    className="text-conest-blue"
                    size="sm"
                  >
                    Editar Perfil
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-conest-darkGray/60 mb-1">Email</p>
                    <p className="font-medium text-conest-darkGray text-center">{user.email}</p>
                  </div>
                  
                  <Divider className="my-2" />
                  
                  <div>
                    <p className="text-sm text-conest-darkGray/60 mb-1">Dirección del Apartamento</p>
                    <p className="font-medium text-conest-darkGray text-center">{elder.apartment_address}</p>
                  </div>
                  
                  <Divider className="my-2" />
                  
                  <div>
                    <p className="text-sm text-conest-darkGray/60 mb-1">Alquiler Mensual</p>
                    <p className="font-medium text-conest-darkGray text-center">€{elder.monthly_rent}</p>
                  </div>
                  
                  <Divider className="my-2" />
                  
                  <div>
                    <p className="text-sm text-conest-darkGray/60 mb-1">Fecha de Nacimiento</p>
                    <p className="font-medium text-conest-darkGray text-center">
                      {new Date(elder.birth_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            {/* Fotos del apartamento */}
            <Card className="shadow-soft border-none mt-6 relative w-full max-w-sm rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-conest-lightBlue/30 to-conest-lightBlue/10 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-conest-darkGray text-center">Fotos del Apartamento</h3>
              </CardHeader>
              
              <CardBody className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {elder.apartment_photos && elder.apartment_photos.length > 0 ? (
                    elder.apartment_photos.map((photo, index) => (
                      <div key={index} className="aspect-square relative group">
                        <img 
                          src={photo} 
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
                {/* Sección de Intereses */}
                <div className="mb-6 relative">
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

                {/* Sección de Amenidades */}
                <div className="mb-6 relative">
                  <h4 className="text-md font-semibold text-conest-darkGray mb-4 text-center">Amenidades</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {elder.amenities && elder.amenities.length > 0 ? (
                      elder.amenities.map((amenity, index) => (
                        <Chip 
                          key={index} 
                          size="sm"
                          variant="flat"
                          className="bg-conest-lightBlue/20 text-conest-darkGray text-xs"
                        >
                          {amenity}
                        </Chip>
                      ))
                    ) : (
                      <p className="text-conest-darkGray/60 text-sm">No hay amenidades registradas</p>
                    )}
                  </div>
                </div>

                {/* Sección de Normas de la Casa */}
                <div className="mb-6 relative">
                  <h4 className="text-md font-semibold text-conest-darkGray mb-4 text-center">Normas de la Casa</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {elder.house_rules && elder.house_rules.length > 0 ? (
                      elder.house_rules.map((rule, index) => (
                        <Chip 
                          key={index} 
                          size="sm"
                          variant="flat"
                          className="bg-conest-lightBlue/20 text-conest-darkGray text-xs"
                        >
                          {rule}
                        </Chip>
                      ))
                    ) : (
                      <p className="text-conest-darkGray/60 text-sm">No hay normas registradas</p>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Tarjeta de Actividad */}
            <Card className="shadow-soft border-none relative rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-conest-lightBlue/30 to-conest-lightBlue/10 p-4 rounded-t-2xl">
                <h3 className="text-xl font-bold text-conest-darkGray text-center">Actividad Reciente</h3>
              </CardHeader>
              
              <CardBody className="p-6">
                <div className="flex items-center justify-center gap-4 p-3 rounded-lg bg-conest-lightBlue/10 border border-conest-lightBlue/20 relative">
                  <div className="p-2 bg-conest-blue/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-conest-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
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
  );
};

export default ElderProfile; 