import Link from "next/link";

export default function ForbiddenPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-red-600">403 - Acceso Denegado</h1>
      <p className="text-lg text-gray-700 mt-2 text-center">
        No tienes permisos para acceder a esta página.
      </p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}