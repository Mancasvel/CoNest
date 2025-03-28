// app/success/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Si quieres hacer alguna verificación o redirección aquí, lo puedes hacer
    // Por ejemplo, redirigir después de 3 segundos si es necesario:
    // setTimeout(() => {
    //   router.push('/');
    // }, 3000);
  }, [router]);

  return (
    <div>
      <h1>¡Pago Exitoso!</h1>
      <p>Gracias por tu compra. ¡Tu pago ha sido procesado correctamente!</p>
      <p>Nos pondremos en contacto contigo pronto.</p>
    </div>
  );
};

export default SuccessPage;
