// app/cancel/page.tsx
'use client';

import { useRouter } from 'next/navigation';

const CancelPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Pago Cancelado</h1>
      <p>El pago ha sido cancelado. Si necesitas más ayuda, por favor contáctanos.</p>
      <button onClick={() => router.push('/')}>Volver al inicio</button>
    </div>
  );
};

export default CancelPage;
