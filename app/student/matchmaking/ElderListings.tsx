'use client';

import { useState } from 'react';
import { Card, CardBody, Button, Chip, Tooltip } from "@heroui/react";
import { motion } from 'framer-motion';
import { Elder as ElderType } from '@/types/interfaces';
import { useRouter } from 'next/navigation';

interface ElderListingsProps {
  elders: ElderType[];
}

export default function ElderListings({ elders }: ElderListingsProps) {
  const router = useRouter();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<Record<string, number>>({});
  const [favoriteElders, setFavoriteElders] = useState<string[]>([]);

  const handleNextPhoto = (elderId: string, photos: string[] | null) => {
    if (!photos || photos.length <= 1) return;
    
    const nextIndex = ((currentPhotoIndex[elderId] || 0) + 1) % photos.length;
    setCurrentPhotoIndex({
      ...currentPhotoIndex,
      [elderId]: nextIndex
    });
  };

  const handlePrevPhoto = (elderId: string, photos: string[] | null) => {
    if (!photos || photos.length <= 1) return;
    
    const prevIndex = ((currentPhotoIndex[elderId] || 0) - 1 + photos.length) % photos.length;
    setCurrentPhotoIndex({
      ...currentPhotoIndex,
      [elderId]: prevIndex
    });
  };

  const toggleFavorite = (event: React.MouseEvent, elderId: string) => {
    event.stopPropagation(); // Prevenir que el click se propague a la tarjeta
    setFavoriteElders(prev => 
      prev.includes(elderId) 
        ? prev.filter(id => id !== elderId) 
        : [...prev, elderId]
    );
  };

  const navigateToElderDetails = (elderId: string) => {
    // Aquí puedes navegar al detalle del elder
    router.push(`/elder/${elderId}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES').format(price);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-2xl text-conest-darkGray">Pisos Disponibles</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-conest-darkGray">Ordenar:</span>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-conest-blue">
            <option value="relevancia">Relevancia</option>
            <option value="precio_asc">Precio: menor a mayor</option>
            <option value="precio_desc">Precio: mayor a menor</option>
            <option value="recientes">Más recientes</option>
          </select>
        </div>
      </div>

      {elders.length === 0 ? (
        <Card className="w-full shadow-soft border-none">
          <CardBody className="flex items-center justify-center py-12">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-conest-mediumGray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M12 14a3 3 0 100-6 3 3 0 000 6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-conest-darkGray font-medium">No se encontraron pisos con los criterios seleccionados</p>
              <p className="text-conest-mediumGray text-sm mt-2">Prueba con otros filtros para encontrar más opciones</p>
            </div>
          </CardBody>
        </Card>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <p className="text-conest-darkGray font-medium">Mostrando {elders.length} resultados</p>
            {elders.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-conest-darkGray">Página 1 de 1</span>
                <div className="flex">
                  <button className="bg-white border border-gray-200 px-2 py-1 rounded-l-md text-conest-darkGray disabled:opacity-50" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="bg-white border border-gray-200 border-l-0 px-2 py-1 rounded-r-md text-conest-darkGray disabled:opacity-50" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 gap-6 w-full">
              {elders.map((elder) => (
                <motion.div
                  key={elder.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex justify-center"
                >
                  <Card 
                    className="w-full max-w-3xl border-none shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => navigateToElderDetails(elder.id)}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Imagen del apartamento */}
                      <div className="w-full md:w-1/3 relative">
                        {elder.apartment_photos && elder.apartment_photos.length > 0 ? (
                          <img
                            src={elder.apartment_photos[currentPhotoIndex[elder.id] || 0] || "/placeholder.svg"}
                            alt="Apartamento"
                            className="w-full h-full object-cover aspect-square"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-conest-lightGray aspect-square">
                            <div className="text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2 text-conest-mediumGray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <p className="text-conest-mediumGray text-sm">No hay fotos disponibles</p>
                            </div>
                          </div>
                        )}
                        
                        {/* Badge de status */}
                        <Chip 
                          className="absolute top-3 left-3 bg-white text-conest-darkGray px-3 py-1 shadow-md"
                          size="sm"
                          variant="flat"
                        >
                          {elder.status === 'MATCHED' ? 'Ocupado' : 'Disponible'}
                        </Chip>

                        
                        {/* Foto de perfil del propietario */}
                        <div className="absolute bottom-3 right-3">
                          <Tooltip content="Propietario">
                            <div className="relative">
                              <img
                                src={elder.profile_photo || "/default-profile.jpg"}
                                alt="Foto de perfil del propietario"
                                className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
                              />
                            </div>
                          </Tooltip>
                        </div>
                      </div>
                      
                      {/* Información del apartamento */}
                      <div className="w-full md:w-2/3 p-5">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg text-conest-darkGray mb-1">
                              Calle {elder.apartment_address?.split(',')[0] || 'No especificada'}
                            </h3>
                            <p className="text-sm text-conest-mediumGray mb-3">{elder.apartment_address || 'Dirección no disponible'}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-conest-blue font-bold text-2xl">{formatPrice(elder.monthly_rent)}€</p>
                            <p className="text-xs text-conest-mediumGray">Alquiler Mensual</p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-conest-darkGray mb-4">
                          {elder.apartment_description || 'Vivienda con Licencia Vacacional. Exclusivo piso ubicado en buena zona. La vivienda está ubicada en la planta 1 exterior con ascensor.'}
                        </p>
                        
                        <div className="mb-4">
                          <div className="text-sm font-medium text-conest-darkGray mb-2">Intereses:</div>
                          <div className="flex flex-wrap gap-1.5">
                            {elder.interests?.slice(0, 3).map((interest, idx) => (
                              <Chip 
                                key={idx} 
                                size="sm"
                                variant="flat"
                                className="bg-conest-lightBlue/20 text-conest-blue text-xs"
                              >
                                {interest}
                              </Chip>
                            ))}
                            {elder.interests && elder.interests.length > 3 && (
                              <Chip 
                                size="sm"
                                variant="flat"
                                className="bg-conest-lightBlue/10 text-conest-blue text-xs"
                              >
                                +{elder.interests.length - 3} más
                              </Chip>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-end gap-2 mt-4">
                          <Button 
                            size="md"
                            variant="flat"
                            className={`${favoriteElders.includes(elder.id) ? "bg-pink-100 text-pink-500" : "bg-gray-100 text-conest-darkGray"}`}
                            onClick={(e) => toggleFavorite(e, elder.id)}
                            startContent={
                              favoriteElders.includes(elder.id) ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                              )
                            }
                          >
                            {favoriteElders.includes(elder.id) ? "Guardado" : "Guardar"}
                          </Button>
                          
                          <Button 
                            size="md"
                            color="primary"
                            className="bg-conest-blue text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Lógica para solicitar match
                            }}
                          >
                            Solicitar Match
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
} 