"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { signUpAction } from "@/app/actions";
import { FormMessage } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@heroui/react";
import Link from "next/link";

function SignupForm() {
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

          <Input name="email" placeholder="tucorreo@ejemplo.com" required />

          {/* Contraseña */}
          <Input type="password" name="password" placeholder="Tu contraseña" minLength={6} required />

          {/* Selección de rol */}
          <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="student">Estudiante</option>
            <option value="elder">Adulto mayor</option>
          </select>

          {/* Campos para estudiantes */}
          {role === "student" && (
            <>
              <Input name="university" placeholder="Tu universidad" required />

              <select name="course" required>
                <option value="1">1° Año</option>
                <option value="2">2° Año</option>
                <option value="3">3° Año</option>
                <option value="4">4° Año</option>
              </select>

              <Input type="date" name="birth_date" required />
            </>
          )}

          {/* Campos para adultos mayores */}
          {role === "elder" && (
            <>
              <Input type="date" name="birth_date" required />

              <Input name="apartment_address" placeholder="Tu dirección" required />

              <Input type="number" name="monthly_rent" placeholder="Precio de la renta" required />
            </>
          )}

          {/* Botón de envío */}
          <SubmitButton formAction={signUpAction} pendingText="Registrando...">
            Registrarse

          </SubmitButton>
        </div>
      </form>

    </>
  );
}

export default function Signup() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <SignupForm />
    </Suspense>
  );
}

