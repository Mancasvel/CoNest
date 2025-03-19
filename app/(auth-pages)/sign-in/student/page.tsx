"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import NavbarTerracota from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const StudentLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Por favor, completa todos los campos");
      return;
    }

    try {
      // Simulación de login exitoso
      localStorage.setItem('userToken', 'student-token-example');
      router.push("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarTerracota />
      <div className="max-w-7xl mx-auto px-5 w-full flex flex-col flex-grow">
        <div className="container flex justify-center items-center mt-10 hidden md:flex">
          <div className="w-1/3 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-yellow-600 text-center">
              Iniciar Sesión como Estudiante
            </h2>

            <form onSubmit={login}>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo Electrónico
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full"
                  required
                  variant="bordered"
                  color="warning"
                />
              </div>

              <div className="mt-4 relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full"
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

              {errorMessage && (
                <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
              )}

              <div className="mt-6">
                <Button
                  type="submit"
                  color="warning"
                  className="w-full py-2 bg-yellow-500 text-white"
                >
                  Iniciar Sesión
                </Button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  ¿No tienes cuenta?{" "}
                  <Link href="/sign-up?role=student" className="text-yellow-600 hover:underline">
                    Regístrate aquí
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="container flex flex-col items-center mt-10 md:hidden">
          <div className="w-full max-w-xs bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-yellow-600 text-center">
              Iniciar Sesión como Estudiante
            </h2>

            <form onSubmit={login}>
              <div className="mt-4">
                <label
                  htmlFor="email-mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo Electrónico
                </label>
                <Input
                  type="email"
                  id="email-mobile"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full"
                  required
                  variant="bordered"
                  color="warning"
                />
              </div>

              <div className="mt-4 relative">
                <label
                  htmlFor="password-mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password-mobile"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full"
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

              {errorMessage && (
                <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
              )}

              <div className="mt-6">
                <Button
                  type="submit"
                  color="warning"
                  className="w-full py-2 bg-yellow-500 text-white"
                >
                  Iniciar Sesión
                </Button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  ¿No tienes cuenta?{" "}
                  <Link href="/sign-up?role=student" className="text-yellow-600 hover:underline">
                    Regístrate aquí
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

export default StudentLogin; 