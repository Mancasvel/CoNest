'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button, Checkbox, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import NavbarTerracota from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const StudentSignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    university: "",
    studyField: "",
    phone: "",
    acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const universities = [
    { label: "Universidad Complutense de Madrid", value: "UCM" },
    { label: "Universidad Autónoma de Madrid", value: "UAM" },
    { label: "Universidad Carlos III", value: "UC3M" },
    { label: "Universidad Politécnica de Madrid", value: "UPM" },
    { label: "UNED", value: "UNED" },
    { label: "Otra universidad", value: "OTHER" }
  ];

  const studyFields = [
    { label: "Ingeniería", value: "engineering" },
    { label: "Medicina", value: "medicine" },
    { label: "Derecho", value: "law" },
    { label: "Economía", value: "economics" },
    { label: "Artes", value: "arts" },
    { label: "Ciencias", value: "sciences" },
    { label: "Otros", value: "other" }
  ];

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const register = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.email || !formData.password || !formData.fullName) {
      setErrorMessage("Por favor, completa todos los campos requeridos");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    if (!formData.acceptTerms) {
      setErrorMessage("Debes aceptar los términos y condiciones");
      return;
    }

    try {
      // Simulación de registro exitoso
      localStorage.setItem('userToken', 'student-token-example');
      router.push("/");
    } catch (error) {
      console.error("Error al registrarse:", error);
      setErrorMessage("Error al crear la cuenta");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarTerracota />
      <div className="max-w-7xl mx-auto px-5 w-full flex flex-col flex-grow">
        <div className="container flex justify-center items-center mt-10 mb-10">
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-yellow-600 text-center mb-6">
              Regístrate como Estudiante
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Crea tu cuenta como estudiante y comienza a buscar alojamiento asequible.
            </p>

            <form onSubmit={register} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nombre completo *
                  </label>
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                    variant="bordered"
                    color="warning"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Correo Electrónico *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                    variant="bordered"
                    color="warning"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contraseña *
                  </label>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                    variant="bordered"
                    color="warning"
                    endContent={
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="text-gray-500 focus:outline-none"
                      >
                        {showPassword ? "Ocultar" : "Mostrar"}
                      </button>
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirmar Contraseña *
                  </label>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                    variant="bordered"
                    color="warning"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    variant="bordered"
                    color="warning"
                  />
                </div>

                <div>
                  <label
                    htmlFor="university"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Universidad *
                  </label>
                  <Select
                    id="university"
                    label="Selecciona tu universidad"
                    className="w-full"
                    value={formData.university}
                    onChange={(e) => handleSelectChange("university", e.target.value)}
                    variant="bordered"
                    color="warning"
                  >
                    {universities.map((uni) => (
                      <SelectItem key={uni.value} value={uni.value}>
                        {uni.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="studyField"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Campo de estudio
                  </label>
                  <Select
                    id="studyField"
                    label="Selecciona tu campo de estudio"
                    className="w-full"
                    value={formData.studyField}
                    onChange={(e) => handleSelectChange("studyField", e.target.value)}
                    variant="bordered"
                    color="warning"
                  >
                    {studyFields.map((field) => (
                      <SelectItem key={field.value} value={field.value}>
                        {field.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="flex items-start">
                <Checkbox 
                  id="acceptTerms" 
                  name="acceptTerms"
                  isSelected={formData.acceptTerms}
                  onValueChange={(checked) => setFormData({...formData, acceptTerms: checked})}
                  color="warning"
                >
                  <span className="text-sm text-gray-700">
                    Acepto los{" "}
                    <Link href="/terms" className="text-yellow-600 hover:underline">
                      Términos y Condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="/privacy" className="text-yellow-600 hover:underline">
                      Política de Privacidad
                    </Link>
                  </span>
                </Checkbox>
              </div>

              {errorMessage && (
                <div className="text-red-500 text-center">{errorMessage}</div>
              )}

              <div>
                <Button
                  type="submit"
                  color="warning"
                  className="w-full py-3 bg-yellow-500 text-white font-medium"
                >
                  Crear Cuenta
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  ¿Ya tienes una cuenta?{" "}
                  <Link href="/sign-in/student" className="text-yellow-600 hover:underline">
                    Inicia sesión aquí
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentSignUp;