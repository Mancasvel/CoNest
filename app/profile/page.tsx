'use client';

import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Input, Button, Tabs, Tab, Divider, Avatar, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import NavbarTerracota from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
    preferences: {
      notifications: true,
      newsletter: false,
      privacy: "medium"
    },
    role: "" // 'elder' o 'student'
  });

  // Simular la obtención de datos del perfil
  useEffect(() => {
    // Verificar si el usuario está autenticado
    const token = localStorage.getItem('userToken');
    
    if (!token) {
      // Redirigir si no está autenticado
      router.push('/sign-in');
      return;
    }
    
    // Detectar el tipo de usuario por el token
    const userRole = token.includes('elder') ? 'elder' : 'student';
    
    // Simular una llamada a la API para obtener datos del perfil
    setTimeout(() => {
      setProfileData({
        fullName: userRole === 'elder' ? "María González" : "Carlos Rodríguez",
        email: userRole === 'elder' ? "maria.gonzalez@ejemplo.com" : "carlos.rodriguez@ejemplo.com",
        phone: "+34 600 123 456",
        address: userRole === 'elder' ? "Calle Mayor 123, Madrid" : "Residencia Universitaria Campus Sur",
        bio: userRole === 'elder' 
            ? "Jubilada con una habitación libre en mi piso. Me encanta la compañía y charlar sobre libros."
            : "Estudiante de Ingeniería. Me gusta ayudar con las tareas del hogar y la tecnología.",
        preferences: {
          notifications: true,
          newsletter: false,
          privacy: "medium"
        },
        role: userRole
      });
      setIsLoading(false);
    }, 1000);
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handlePreferenceChange = (name, value) => {
    setProfileData({
      ...profileData,
      preferences: {
        ...profileData.preferences,
        [name]: value
      }
    });
  };

  const handleSaveProfile = () => {
    // Simular guardado
    alert("Perfil actualizado correctamente");
  };

  if (isLoading) {
    return (
      <div className="flex flex-col h-screen">
        <NavbarTerracota />
        <div className="flex-1 flex justify-center items-center">
              <p>Cargando...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const roleColor = profileData.role === 'elder' ? "primary" : "warning";
  const buttonBgColor = profileData.role === 'elder' ? "bg-teal-700" : "bg-yellow-500";

  return (
    <div className="flex flex-col h-screen">
      <NavbarTerracota />
      <div className="flex-1 flex flex-col py-12 px-4 max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Mi Perfil</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar con avatar y stats */}
          <div className="col-span-1">
            <Card className="p-4">
              <CardBody className="flex flex-col items-center gap-2">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  className="w-24 h-24 mb-2"
                  showFallback
                />
                < h3 className="text-xl font-semibold">{profileData.fullName}</h3>
                <h3 className="text-sm text-gray-500 mb-2">
                  {profileData.role === 'elder' ? 'Anfitrión' : 'Estudiante'}
                </h3>
                <Button size="sm" color={roleColor} className="mt-2 w-full">
                  Cambiar foto
                </Button>
              </CardBody>
              
              <Divider className="my-4" />
              
              <CardBody className="gap-2">
                <div className="flex justify-between">
                  <h3 className="text-sm text-gray-600">Perfil completado</h3>
                  <h3 className="text-sm font-medium">80%</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${profileData.role === 'elder' ? 'bg-teal-600' : 'bg-yellow-500'}`} 
                    style={{width: '80%'}}
                  ></div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Contenido principal */}
          <div className="col-span-1 md:col-span-3">
            <Card>
              <CardHeader>
                <Tabs color={roleColor} fullWidth>
                  <Tab key="info" title="Información Personal">
                    <CardBody className="px-4 py-6 gap-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre completo
                          </h3>
                          <Input
                            type="text"
                            name="fullName"
                            value={profileData.fullName}
                            onChange={handleInputChange}
                            variant="bordered"
                            color={roleColor}
                            classNames={{
                              input: "bg-white",
                              inputWrapper: "bg-white"
                            }}
                          />
                        </div>
                        
                        <div>
                          <h3 className="block text-sm font-medium text-gray-700 mb-1">
                            Correo electrónico
                          </h3>
                          <Input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                            variant="bordered"
                            color={roleColor}
                            isReadOnly
                            classNames={{
                              input: "bg-white",
                              inputWrapper: "bg-white"
                            }}
                          />
                        </div>
                        
                        <div>
                          <h3 className="block text-sm font-medium text-gray-700 mb-1">
                            Teléfono
                          </h3>
                          <Input
                            type="tel"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleInputChange}
                            variant="bordered"
                            color={roleColor}
                            classNames={{
                              input: "bg-white",
                              inputWrapper: "bg-white"
                            }}
                          />
                        </div>
                        
                        <div>
                          <h3 className="block text-sm font-medium text-gray-700 mb-1">
                            Dirección
                          </h3>
                          <Input
                            type="text"
                            name="address"
                            value={profileData.address}
                            onChange={handleInputChange}
                            variant="bordered"
                            color={roleColor}
                            classNames={{
                              input: "bg-white",
                              inputWrapper: "bg-white"
                            }}
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <h3 className="block text-sm font-medium text-gray-700 mb-1">
                            Biografía
                          </h3>
                          <Input
                            type="text"
                            name="bio"
                            value={profileData.bio}
                            onChange={handleInputChange}
                            variant="bordered"
                            color={roleColor}
                            className="w-full"
                            classNames={{
                              input: "bg-white",
                              inputWrapper: "bg-white"
                            }}
                            minRows={3}
                            maxRows={5}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          color={roleColor} 
                          className={`${buttonBgColor} text-white`}
                          onClick={handleSaveProfile}
                        >
                          Guardar cambios
                        </Button>
                      </div>
                    </CardBody>
                  </Tab>
                  
                  <Tab key="preferences" title="Preferencias">
                    <CardBody className="px-4 py-6 gap-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="block text-sm font-medium text-gray-700 mb-1">
                            Notificaciones
                          </h3>
                          <Select
                            variant="bordered"
                            color={roleColor}
                            selectedKeys={[profileData.preferences.notifications ? "on" : "off"]}
                            onChange={(e) => handlePreferenceChange("notifications", e.target.value === "on")}
                            classNames={{
                              trigger: "bg-white",
                              value: "bg-white"
                            }}
                          >
                            <SelectItem key="on" value="on">Activadas</SelectItem>
                            <SelectItem key="off" value="off">Desactivadas</SelectItem>
                          </Select>
                        </div>
                        
                        <div>
                          <h3 className="block text-sm font-medium text-gray-700 mb-1">
                            Boletín informativo
                          </h3>
                          <Select
                            variant="bordered"
                            color={roleColor}
                            selectedKeys={[profileData.preferences.newsletter ? "on" : "off"]}
                            onChange={(e) => handlePreferenceChange("newsletter", e.target.value === "on")}
                            classNames={{
                              trigger: "bg-white",
                              value: "bg-white"
                            }}
                          >
                            <SelectItem key="on" value="on">Suscrito</SelectItem>
                            <SelectItem key="off" value="off">No suscrito</SelectItem>
                          </Select>
                        </div>
                        
                        <div>
                          <h3 className="block text-sm font-medium text-gray-700 mb-1">
                            Nivel de privacidad
                          </h3>
                          <Select
                            variant="bordered"
                            color={roleColor}
                            selectedKeys={[profileData.preferences.privacy]}
                            onChange={(e) => handlePreferenceChange("privacy", e.target.value)}
                            classNames={{
                              trigger: "bg-white",
                              value: "bg-white"
                            }}
                          >
                            <SelectItem key="low" value="low">Bajo (Perfil público)</SelectItem>
                            <SelectItem key="medium" value="medium">Medio</SelectItem>
                            <SelectItem key="high" value="high">Alto (Solo contactos)</SelectItem>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          color={roleColor} 
                          className={`${buttonBgColor} text-white`}
                          onClick={handleSaveProfile}
                        >
                          Guardar preferencias
                        </Button>
                      </div>
                    </CardBody>
                  </Tab>
                  
                  <Tab key="security" title="Seguridad">
                    <CardBody className="px-4 py-6 gap-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="block text-sm font-medium text-gray-700 mb-1">
                            Contraseña actual
                          </h3>
                          <Input
                            type="password"
                            placeholder="Introduce tu contraseña actual"
                            variant="bordered"
                            color={roleColor}
                            classNames={{
                              input: "bg-white",
                              inputWrapper: "bg-white"
                            }}
                          />
                        </div>
                        
                        <div className="md:col-span-2 h-4"></div>
                        
                        <div>
                          <h3 className="block text-sm font-medium text-gray-700 mb-1">
                            Nueva contraseña
                          </h3>
                          <Input
                            type="password"
                            placeholder="Introduce nueva contraseña"
                            variant="bordered"
                            color={roleColor}
                            classNames={{
                              input: "bg-white",
                              inputWrapper: "bg-white"
                            }}
                          />
                        </div>
                        
                        <div>
                          <h3 className="block text-sm font-medium text-gray-700 mb-1">
                            Confirmar nueva contraseña
                          </h3>
                          <Input
                            type="password"
                            placeholder="Confirma nueva contraseña"
                            variant="bordered"
                            color={roleColor}
                            classNames={{
                              input: "bg-white",
                              inputWrapper: "bg-white"
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          color={roleColor} 
                          className={`${buttonBgColor} text-white`}
                        >
                          Cambiar contraseña
                        </Button>
                      </div>
                    </CardBody>
                  </Tab>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 