'use client';

import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Input, Button, Tabs, Tab, Divider, Avatar, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
// @ts-ignore
import { useForm, Controller, Control, FieldValues, UseFormSetValue } from "react-hook-form";
// @ts-ignore
import { yupResolver } from "@hookform/resolvers/yup";
// @ts-ignore
import * as yup from "yup";
import NavbarTerracota from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// Definir interfaces para los datos
interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
}

interface Preferences {
  notifications: boolean;
  newsletter: boolean;
  privacy: string;
}

interface SecurityInfo {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// Definir un tipo genérico para props de Controller
interface ControllerRenderProps {
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  value: any;
  name: string;
  ref: React.Ref<any>;
}

// Esquema de validación para información personal
const personalInfoSchema = yup.object().shape({
  fullName: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Correo electrónico inválido").required("El correo es obligatorio"),
  phone: yup.string().matches(/^\+?[0-9]{9,15}$/, "Número de teléfono inválido"),
  address: yup.string(),
  bio: yup.string().max(300, "La biografía no puede exceder los 300 caracteres")
});

// Esquema de validación para cambio de contraseña
const passwordSchema = yup.object().shape({
  currentPassword: yup.string().required("La contraseña actual es obligatoria"),
  newPassword: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial"
    )
    .required("La nueva contraseña es obligatoria"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Las contraseñas deben coincidir")
    .required("Confirma la nueva contraseña")
});

export default function ProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("info");
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

  // Configuración de react-hook-form para información personal
  const {
    control: personalControl,
    handleSubmit: handlePersonalSubmit,
    formState: { errors: personalErrors },
    setValue: setPersonalValue
  } = useForm<PersonalInfo>({
    resolver: yupResolver(personalInfoSchema) as any,
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      bio: ""
    }
  });

  // Configuración de react-hook-form para preferencias
  const {
    control: preferencesControl,
    handleSubmit: handlePreferencesSubmit,
    setValue: setPreferencesValue
  } = useForm<Preferences>({
    defaultValues: {
      notifications: true,
      newsletter: false,
      privacy: "medium"
    }
  });

  // Configuración de react-hook-form para cambio de contraseña
  const {
    control: securityControl,
    handleSubmit: handleSecuritySubmit,
    formState: { errors: securityErrors }
  } = useForm<SecurityInfo>({
    resolver: yupResolver(passwordSchema) as any,
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    }
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
      const userData = {
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
      };
      
      setProfileData(userData);
      
      // Actualizar valores predeterminados en los formularios
      setPersonalValue("fullName", userData.fullName);
      setPersonalValue("email", userData.email);
      setPersonalValue("phone", userData.phone);
      setPersonalValue("address", userData.address);
      setPersonalValue("bio", userData.bio);
      
      setPreferencesValue("notifications", userData.preferences.notifications);
      setPreferencesValue("newsletter", userData.preferences.newsletter);
      setPreferencesValue("privacy", userData.preferences.privacy);
      
      setIsLoading(false);
    }, 1000);
  }, [router, setPersonalValue, setPreferencesValue]);

  const onPersonalInfoSubmit = (data: PersonalInfo) => {
    console.log("Formulario de información personal enviado:", data);
    alert("Información personal actualizada correctamente");
  };

  const onPreferencesSubmit = (data: Preferences) => {
    console.log("Formulario de preferencias enviado:", data);
    alert("Preferencias actualizadas correctamente");
  };

  const onSecuritySubmit = (data: SecurityInfo) => {
    console.log("Formulario de seguridad enviado:", data);
    alert("Contraseña actualizada correctamente");
  };

  if (isLoading) {
    return (
      <div className="flex flex-col h-screen">
        <NavbarTerracota />
        <div className="flex-1 flex justify-center items-center">
          <Card>
            <CardBody>
              <p>Cargando...</p>
            </CardBody>
          </Card>
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
      <div className="flex-1 flex flex-col py-12 px-4 max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Mi Perfil</h1>

        <Card className="w-full mb-8">
          <CardBody className="flex flex-col items-center py-6">
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              className="w-24 h-24 mb-4"
              showFallback
            />
            <h3 className="text-xl font-semibold">{profileData.fullName}</h3>
            <p className="text-sm text-gray-500 mb-4">
              {profileData.role === 'elder' ? 'Anfitrión' : 'Estudiante'}
            </p>
            <Button 
              size="sm" 
              color={roleColor} 
              className="mb-6 max-w-xs w-full"
            >
              Cambiar foto
            </Button>

            <Divider className="w-full my-4" />
            
            <div className="w-full max-w-md mb-6">
              <div className="flex justify-between mb-2">
                <p className="text-sm text-gray-600">Perfil completado</p>
                <p className="text-sm font-medium">80%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                <div 
                  className={`h-2 rounded-full ${profileData.role === 'elder' ? 'bg-teal-600' : 'bg-yellow-500'}`} 
                  style={{width: '80%'}}
                ></div>
              </div>
            </div>

            <Tabs 
              color={roleColor} 
              fullWidth 
              classNames={{
                base: "w-full max-w-3xl",
                tabList: "bg-white rounded-lg p-0",
                tab: "py-3",
                panel: "pt-3"
              }}
              selectedKey={activeTab}
              onSelectionChange={(key) => setActiveTab(key as string)}
            >
              <Tab key="info" title="Información Personal">
                <Card className="border-none shadow-none">
                  <CardBody className="px-0 py-6 gap-6">
                    <form onSubmit={handlePersonalSubmit(onPersonalInfoSubmit)}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre completo *
                          </p>
                          <Controller
                            name="fullName"
                            control={personalControl}
                            render={({ field }: { field: ControllerRenderProps }) => (
                              <Input
                                {...field}
                                type="text"
                                variant="bordered"
                                color={roleColor}
                                isInvalid={!!personalErrors.fullName}
                                errorMessage={personalErrors.fullName?.message}
                                classNames={{
                                  input: "bg-white",
                                  inputWrapper: "bg-white"
                                }}
                              />
                            )}
                          />
                        </div>
                        
                        <div>
                          <p className="block text-sm font-medium text-gray-700 mb-1">
                            Correo electrónico *
                          </p>
                          <Controller
                            name="email"
                            control={personalControl}
                            render={({ field }: { field: ControllerRenderProps }) => (
                              <Input
                                {...field}
                                type="email"
                                variant="bordered"
                                color={roleColor}
                                isReadOnly
                                isInvalid={!!personalErrors.email}
                                errorMessage={personalErrors.email?.message}
                                classNames={{
                                  input: "bg-white",
                                  inputWrapper: "bg-white"
                                }}
                              />
                            )}
                          />
                        </div>
                        
                        <div>
                          <p className="block text-sm font-medium text-gray-700 mb-1">
                            Teléfono
                          </p>
                          <Controller
                            name="phone"
                            control={personalControl}
                            render={({ field }: { field: ControllerRenderProps }) => (
                              <Input
                                {...field}
                                type="tel"
                                variant="bordered"
                                color={roleColor}
                                isInvalid={!!personalErrors.phone}
                                errorMessage={personalErrors.phone?.message}
                                classNames={{
                                  input: "bg-white",
                                  inputWrapper: "bg-white"
                                }}
                              />
                            )}
                          />
                        </div>
                        
                        <div>
                          <p className="block text-sm font-medium text-gray-700 mb-1">
                            Dirección
                          </p>
                          <Controller
                            name="address"
                            control={personalControl}
                            render={({ field }: { field: ControllerRenderProps }) => (
                              <Input
                                {...field}
                                type="text"
                                variant="bordered"
                                color={roleColor}
                                isInvalid={!!personalErrors.address}
                                errorMessage={personalErrors.address?.message}
                                classNames={{
                                  input: "bg-white",
                                  inputWrapper: "bg-white"
                                }}
                              />
                            )}
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <p className="block text-sm font-medium text-gray-700 mb-1">
                            Biografía
                          </p>
                          <Controller
                            name="bio"
                            control={personalControl}
                            render={({ field }: { field: ControllerRenderProps }) => (
                              <Input
                                {...field}
                                type="text"
                                variant="bordered"
                                color={roleColor}
                                isInvalid={!!personalErrors.bio}
                                errorMessage={personalErrors.bio?.message}
                                className="w-full"
                                classNames={{
                                  input: "bg-white",
                                  inputWrapper: "bg-white"
                                }}
                              />
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-6">
                        <Button 
                          type="submit"
                          color={roleColor} 
                          className={`${buttonBgColor} text-white`}
                        >
                          Guardar cambios
                        </Button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </Tab>
              
              <Tab key="preferences" title="Preferencias">
                <Card className="border-none shadow-none">
                  <CardBody className="px-0 py-6 gap-6">
                    <form onSubmit={handlePreferencesSubmit(onPreferencesSubmit)}>
                      <div className="space-y-6">
                        <div>
                          <p className="block text-sm font-medium text-gray-700 mb-1">
                            Notificaciones
                          </p>
                          <Controller
                            name="notifications"
                            control={preferencesControl}
                            render={({ field }: { field: ControllerRenderProps }) => (
                              <Select
                                selectedKeys={[field.value ? "on" : "off"]}
                                onChange={(e) => field.onChange(e.target.value === "on")}
                                variant="bordered"
                                color={roleColor}
                                classNames={{
                                  trigger: "bg-white",
                                  value: "bg-white"
                                }}
                              >
                                <SelectItem key="on" value="on">Activadas</SelectItem>
                                <SelectItem key="off" value="off">Desactivadas</SelectItem>
                              </Select>
                            )}
                          />
                        </div>
                        
                        <div>
                          <p className="block text-sm font-medium text-gray-700 mb-1">
                            Boletín informativo
                          </p>
                          <Controller
                            name="newsletter"
                            control={preferencesControl}
                            render={({ field }: { field: ControllerRenderProps }) => (
                              <Select
                                selectedKeys={[field.value ? "on" : "off"]}
                                onChange={(e) => field.onChange(e.target.value === "on")}
                                variant="bordered"
                                color={roleColor}
                                classNames={{
                                  trigger: "bg-white",
                                  value: "bg-white"
                                }}
                              >
                                <SelectItem key="on" value="on">Suscrito</SelectItem>
                                <SelectItem key="off" value="off">No suscrito</SelectItem>
                              </Select>
                            )}
                          />
                        </div>
                        
                        <div>
                          <p className="block text-sm font-medium text-gray-700 mb-1">
                            Nivel de privacidad
                          </p>
                          <Controller
                            name="privacy"
                            control={preferencesControl}
                            render={({ field }: { field: ControllerRenderProps }) => (
                              <Select
                                selectedKeys={[field.value]}
                                onChange={(e) => field.onChange(e.target.value)}
                                variant="bordered"
                                color={roleColor}
                                classNames={{
                                  trigger: "bg-white",
                                  value: "bg-white"
                                }}
                              >
                                <SelectItem key="low" value="low">Bajo (Perfil público)</SelectItem>
                                <SelectItem key="medium" value="medium">Medio</SelectItem>
                                <SelectItem key="high" value="high">Alto (Solo contactos)</SelectItem>
                              </Select>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-6">
                        <Button 
                          type="submit"
                          color={roleColor} 
                          className={`${buttonBgColor} text-white`}
                        >
                          Guardar preferencias
                        </Button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </Tab>
              
              <Tab key="security" title="Seguridad">
                <Card className="border-none shadow-none">
                  <CardBody className="px-0 py-6 gap-6">
                    <form onSubmit={handleSecuritySubmit(onSecuritySubmit)}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="block text-sm font-medium text-gray-700 mb-1">
                            Contraseña actual *
                          </p>
                          <Controller
                            name="currentPassword"
                            control={securityControl}
                            render={({ field }: { field: ControllerRenderProps }) => (
                              <Input
                                {...field}
                                type="password"
                                placeholder="Introduce tu contraseña actual"
                                variant="bordered"
                                color={roleColor}
                                isInvalid={!!securityErrors.currentPassword}
                                errorMessage={securityErrors.currentPassword?.message}
                                classNames={{
                                  input: "bg-white",
                                  inputWrapper: "bg-white"
                                }}
                              />
                            )}
                          />
                        </div>
                        
                        <div className="md:col-span-2 h-4"></div>
                        
                        <div>
                          <p className="block text-sm font-medium text-gray-700 mb-1">
                            Nueva contraseña *
                          </p>
                          <Controller
                            name="newPassword"
                            control={securityControl}
                            render={({ field }: { field: ControllerRenderProps }) => (
                              <Input
                                {...field}
                                type="password"
                                placeholder="Introduce nueva contraseña"
                                variant="bordered"
                                color={roleColor}
                                isInvalid={!!securityErrors.newPassword}
                                errorMessage={securityErrors.newPassword?.message}
                                classNames={{
                                  input: "bg-white",
                                  inputWrapper: "bg-white"
                                }}
                              />
                            )}
                          />
                        </div>
                        
                        <div>
                          <p className="block text-sm font-medium text-gray-700 mb-1">
                            Confirmar nueva contraseña *
                          </p>
                          <Controller
                            name="confirmPassword"
                            control={securityControl}
                            render={({ field }: { field: ControllerRenderProps }) => (
                              <Input
                                {...field}
                                type="password"
                                placeholder="Confirma nueva contraseña"
                                variant="bordered"
                                color={roleColor}
                                isInvalid={!!securityErrors.confirmPassword}
                                errorMessage={securityErrors.confirmPassword?.message}
                                classNames={{
                                  input: "bg-white",
                                  inputWrapper: "bg-white"
                                }}
                              />
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-6">
                        <Button 
                          type="submit"
                          color={roleColor} 
                          className={`${buttonBgColor} text-white`}
                        >
                          Cambiar contraseña
                        </Button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
      <Footer />
    </div>
  );
} 