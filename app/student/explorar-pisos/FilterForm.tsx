'use client';

import { useState, useEffect } from 'react';

const FilterForm = ({ initialCity, initialMinPrice, initialMaxPrice }) => {
  const [city, setCity] = useState(initialCity || '');
  const [minPrice, setMinPrice] = useState(initialMinPrice || '');
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice || '');

  useEffect(() => {
    // Cuando se actualiza el filtro, actualizamos la URL
    const queryParams = new URLSearchParams();
    if (city) queryParams.set('city', city);
    if (minPrice) queryParams.set('minPrice', minPrice);
    if (maxPrice) queryParams.set('maxPrice', maxPrice);

    window.history.replaceState({}, '', `?${queryParams.toString()}`);
  }, [city, minPrice, maxPrice]);

  const handleSearchClick = () => {
    // Refresca la página actual
    window.location.reload();
  };

  return (
    <div className="w-full flex gap-6 mb-8">
      <div className="flex flex-col w-1/4">
        <label htmlFor="city" className="mb-2 font-semibold">Ciudad</label>
        <select
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">Selecciona una ciudad</option>
          {['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao', 'Alicante', 'Córdoba', 'Valladolid', 'Vigo', 'Gijón', "L'Hospitalet de Llobregat", 'Vitoria-Gasteiz', 'A Coruña', 'Elche', 'Granada'].map((cityOption) => (
            <option key={cityOption} value={cityOption}>
              {cityOption}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col w-1/4">
        <label htmlFor="minPrice" className="mb-2 font-semibold">Precio Mínimo</label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="px-4 py-2 border rounded-lg"
          placeholder="Mínimo"
        />
      </div>

      <div className="flex flex-col w-1/4">
        <label htmlFor="maxPrice" className="mb-2 font-semibold">Precio Máximo</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="px-4 py-2 border rounded-lg"
          placeholder="Máximo"
        />
      </div>

      {/* Botón Buscar */}
      <div className="flex items-end w-1/4">
        <button
          onClick={handleSearchClick}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default FilterForm;