"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { signUpAction } from "@/app/actions";
import { FormMessage } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default function Signup() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string | null>(null);
  const [role, setRole] = useState("student");

  useEffect(() => {
    const msg = searchParams.get("message");
    if (msg) {
      setMessage(msg);
    }
  }, [searchParams]);

  return (
    <>
      {message && (
        <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
          <FormMessage message={{ message }} />
        </div>
      )}

      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Registro</h1>
        <p className="text-sm text text-foreground">
          ¿Ya tienes una cuenta?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Iniciar sesión
          </Link>
        </p>

        <div className="flex flex-col gap-2 mt-8">
          {/* Correo electrónico */}
          <Label htmlFor="email">Correo electrónico</Label>
          <Input name="email" placeholder="tucorreo@ejemplo.com" required />

          {/* Contraseña */}
          <Label htmlFor="password">Contraseña</Label>
          <Input type="password" name="password" placeholder="Tu contraseña" minLength={6} required />

          {/* Selección de rol */}
          <Label htmlFor="role">Tipo de usuario</Label>
          <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="student">Estudiante</option>
            <option value="elder">Adulto mayor</option>
          </select>

          {/* Campos para estudiantes */}
          {role === "student" && (
            <>
              <Label htmlFor="university">Universidad</Label>
              <Input name="university" placeholder="Tu universidad" required />

              <Label htmlFor="course">Año de curso</Label>
              <select name="course" required>
                <option value="1">1° Año</option>
                <option value="2">2° Año</option>
                <option value="3">3° Año</option>
                <option value="4">4° Año</option>
              </select>

              <Label htmlFor="birth_date">Fecha de nacimiento</Label>
              <Input type="date" name="birth_date" required />
            </>
          )}

          {/* Campos para adultos mayores */}
          {role === "elder" && (
            <>
              <Label htmlFor="birth_date">Fecha de nacimiento</Label>
              <Input type="date" name="birth_date" required />

              <Label htmlFor="apartment_address">Dirección del apartamento</Label>
              <Input name="apartment_address" placeholder="Tu dirección" required />

              <Label htmlFor="monthly_rent">Renta mensual</Label>
              <Input type="number" name="monthly_rent" placeholder="Precio de la renta" required />
            </>
          )}

          {/* Botón de envío */}
          <SubmitButton formAction={signUpAction} pendingText="Registrando...">
            Registrarse
          </SubmitButton>
        </div>
      </form>

      <SmtpMessage />
    </>
  );
}
