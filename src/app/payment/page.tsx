"use client"

import { PaymentForm } from "@/components/payment/payment-form"

export default function PaymentPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Pago para formalizar contrato</h1>
        <p className="mt-2 text-gray-600">
          Para formalizar tu contrato con otro usuario, es necesario realizar un pago único.
          Este pago te permite acceder a nuestro sistema de contratos seguros y gestión de pagos.
        </p>
      </div>

      <PaymentForm />

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">¿Qué incluye el servicio?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Contratos seguros</h3>
            <p className="text-sm text-gray-600">
              Plantillas de contratos legalmente válidas y personalizables para tu acuerdo.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Gestión de pagos</h3>
            <p className="text-sm text-gray-600">
              Sistema seguro para gestionar los pagos mensuales entre anfitrión y estudiante.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Soporte legal</h3>
            <p className="text-sm text-gray-600">
              Acceso a asesoría básica para resolver dudas sobre los términos del contrato.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-blue-50 p-4 text-sm text-blue-700">
        <p>
          <strong>Nota:</strong> Este es un pago único que te da acceso permanente a nuestro
          sistema de contratos. Los pagos mensuales de renta se gestionarán por separado una
          vez que el contrato esté activo.
        </p>
      </div>
    </div>
  )
} 