import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import FilterForm from "./FilterForm"; // Importar el Client Component

export default async function PisosPage({ searchParams }) {
  const supabase = await createClient();

  // Verificación de usuario y rol
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.app_metadata?.role !== "student") {
    redirect("/"); // Redirige si no es estudiante
  }

  // Verificación de estado de estudiante
  let { data: student, error: studentError } = await supabase
    .from("students")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!student || student?.status !== "MATCHMAKING") {
    redirect("/student/comenzar-conest");
  }

  if (studentError || student == null) {
    return <div>Error al obtener los datos: {studentError?.message}</div>; // Manejo de errores de datos
  }

  // Obtener datos de los ancianos
  let { data: elders, error: eldersError } = await supabase.from("elders").select("*");

  if (eldersError || elders == null) {
    return <div>Error al obtener los datos de los ancianos: {eldersError?.message}</div>;
  }

  // Filtros de búsqueda
  const { minPrice, maxPrice, city } = searchParams; // Obtén los parámetros de la URL (query string)

  // Filtrar los datos
  const filteredElders = elders.filter((e) => {
    const apartmentAddressLower = e.apartment_address?.toLowerCase() || '';
    const cityLower = city?.toLowerCase() || '';
    
    const priceInRange = 
      (minPrice ? e.monthly_rent >= parseInt(minPrice) : true) &&
      (maxPrice ? e.monthly_rent <= parseInt(maxPrice) : true);
    
    const cityMatch = city ? apartmentAddressLower.includes(cityLower) : true;

    return priceInRange && cityMatch;
  });

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      {/* Filtros */}
      <FilterForm initialCity={city} initialMinPrice={minPrice} initialMaxPrice={maxPrice} />

      {/* Título y Listado de Pisos */}
      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4">Pisos Disponibles</h2>

        {/* Contenedor con scroll vertical */}
        <div className="space-y-6 py-4 overflow-y-auto max-h-screen">
          {filteredElders.map((e) => (
            <div key={e.id} className="w-full bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
              {/* Información del Anciano */}
              <div className="flex flex-col items-center p-4">
                <img
                  src={e.profile_photo || "/default-profile.jpg"} // Foto por defecto si no tiene foto
                  alt={`${e.nombre} foto`}
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg mb-2">{e.nombre}</h3>
                <p className="text-gray-500 text-center mb-4">{e.apartment_address}</p>
                <p className="text-gray-700 font-semibold mb-2">Alquiler Mensual: ${e.monthly_rent}</p>
                <p className="text-gray-700 font-semibold mb-2">Descripción: {e.apartment_description}</p>

                {/* Intereses */}
                <div className="text-sm mb-4">
                  <span className="font-medium">Intereses:</span> {e.interests?.join(", ") || "No hay intereses listados"}
                </div>

                {/* Carrusel de Fotos del apartamento */}
                <div className="flex gap-2 overflow-x-auto mb-4">
                  {e.apartment_photos?.length ? (
                    e.apartment_photos.map((photo: string | undefined, idx: number) => (
                      <img
                        key={idx}
                        src={photo}
                        alt="Apartamento"
                        className="w-24 h-24 object-cover rounded-md"
                      />
                    ))
                  ) : (
                    <span>No hay fotos del apartamento</span>
                  )}
                </div>

                {/* Botón de contacto o más detalles */}
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-all"
                >
                  Más Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}