// app/pago-prueba/page.tsx

'use client'; // Marca este archivo como componente del lado del cliente

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Cargar Stripe de manera asincrónica
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const PagoPruebaPage = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Crear la sesión de pago en el backend
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: { id: 'user123', email: 'user@example.com' }, // Aquí debes usar el usuario autenticado de Supabase
        }),
      });

      const session = await response.json();

      // Redirigir a Stripe Checkout
      const stripe = await stripePromise;
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      if (result?.error) {
        console.error('Error de Stripe:', result.error.message);
      }
    } catch (error) {
      console.error('Error en la solicitud de creación de sesión:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Compra el Producto</h1>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? 'Cargando...' : 'Pagar con Stripe'}
      </button>
    </div>
  );
};

export default PagoPruebaPage;
