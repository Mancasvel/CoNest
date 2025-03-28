// app/api/create-checkout-session/route.js
import stripe from '../../../lib/stripe';

export async function POST(req) {
  try {
    const { user } = await req.json(); // Obtener datos del cuerpo de la solicitud

    // Verificar si el usuario está autenticado en Supabase
    if (!user) {
      return new Response(JSON.stringify({ error: 'Usuario no autenticado' }), { status: 401 });
    }

    // Crear una sesión de Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Nombre del Producto',
            },
            unit_amount: 1000, // Precio en centavos (ej. $10.00)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      metadata: {
        user_id: user.id,
      },
    });

    return new Response(JSON.stringify({ id: session.id }), { status: 200 });
  } catch (error) {
    console.error('Error al crear la sesión de pago:', error);
    return new Response(JSON.stringify({ error: 'Error al crear la sesión de pago' }), { status: 500 });
  }
}
