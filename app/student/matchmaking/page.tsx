import { createClient } from "@/utils/supabase/server";
import FilterForm from "./FilterForm";
import { Metadata } from "next";
import ElderListings from "./ElderListings";
import { Elder } from "@/types/interfaces";

export const metadata: Metadata = {
  title: "Explorar Pisos | ConEst",
  description: "Explora pisos disponibles para estudiantes",
};

export default async function ExplorarPisosPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const supabase = await createClient();

  // Hacer "await" en searchParams
  const params = await searchParams;

  // Obtener valores de filtros con seguridad
  const minPrice = params?.minPrice as string | undefined;
  const maxPrice = params?.maxPrice as string | undefined;
  const city = params?.city as string | undefined;

  // Obtener datos de los ancianos
  const { data: elders, error: eldersError } = await supabase.from("elders").select("*");

  if (eldersError || elders == null) {
    return <div>Error al obtener los datos de los ancianos: {eldersError?.message}</div>;
  }

  // Filtrar los datos
  const filteredElders = elders.filter((e: Elder) => {
    const apartmentAddressLower = e.apartment_address?.toLowerCase() || "";
    const cityLower = city?.toLowerCase() || "";

    const priceInRange =
      (minPrice ? e.monthly_rent >= Number.parseInt(minPrice) : true) &&
      (maxPrice ? e.monthly_rent <= Number.parseInt(maxPrice) : true);

    const cityMatch = city ? apartmentAddressLower.includes(cityLower) : true;

    return priceInRange && cityMatch;
  });

  return (
    <div className="flex-1 w-full bg-gradient-to-br from-conest-lightBlue/5 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna lateral (izquierda) - Filtros */}
          <div className="w-full lg:w-1/4 space-y-6">
            <FilterForm initialCity={city} initialMinPrice={minPrice} initialMaxPrice={maxPrice} />
            {/* Guardar búsqueda */}
            <div className="bg-yellow-50 border-none shadow-sm rounded-xl p-6">
              <h3 className="font-semibold text-conest-darkGray mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                Nuevos anuncios en tu email
              </h3>
              <p className="text-sm text-conest-darkGray mb-4">
                Te enviaremos nuevas propiedades que coincidan con tus criterios de búsqueda.
              </p>
              <button className="w-full bg-purple-600 text-white px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                Guardar búsqueda
              </button>
            </div>
          </div>
          
          {/* Columna principal (centro) - Listado de pisos */}
          <div className="w-full lg:w-3/4 flex flex-col items-center">
            <div className="w-full max-w-4xl mx-auto">
              <ElderListings elders={filteredElders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
