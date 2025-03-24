import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Key } from "react";

export default async function ElderPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.app_metadata?.role !== "elder") {
    redirect("/");
  }

  let { data: elder, error: elderError } = await supabase
    .from("elders")
    .select("*")
    .eq("id", user.id)
    .single();

  if (elderError || elder == null) {
    return <div>Error fetching data: {elderError?.message}</div>;
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      {/* Información del Elder Logueado */}
      <div className="w-full">
        <h2 className="font-bold text-2xl mb-4">Elder Profile</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Foto de perfil */}
          <div className="flex justify-center md:justify-start">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
              {elder.profile_photo ? (
                <img
                  src={elder.profile_photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex justify-center items-center text-gray-400">No photo</div>
              )}
            </div>
          </div>

          {/* Información del Elder */}
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <h3 className="font-semibold text-lg">Personal Information</h3>
                <div className="mt-2 text-gray-700">
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Birth Date:</strong> {new Date(elder.birth_date).toLocaleDateString()}</p>
                  <p><strong>Interests:</strong> {elder.interests?.join(", ") || "No interests listed"}</p>
                  <p><strong>Status:</strong> {elder.status}</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-lg">Apartment Information</h3>
                <div className="mt-2 text-gray-700">
                  <p><strong>Apartment Address:</strong> {elder.apartment_address}</p>
                  <p><strong>Apartment Description:</strong> {elder.apartment_description || "No description available"}</p>
                  <p><strong>Monthly Rent:</strong> ${elder.monthly_rent.toFixed(2)}</p>
                  <p><strong>Apartment Photos:</strong></p>
                  <div className="grid grid-cols-2 gap-4">
                  {elder.apartment_photos?.map((photo: string | undefined, index: number) => {
                    const safeIndex = index ?? 0; // Si index es null o undefined, asignamos un valor seguro (0)
                    return (
                      <div key={safeIndex} className="w-full h-32 rounded-md overflow-hidden border-2 border-gray-200">
                        <img
                          src={photo}
                          alt={`Apartment photo ${safeIndex + 1}`} // Usamos safeIndex en lugar de index
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  })}
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
