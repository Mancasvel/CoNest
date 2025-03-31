'use client';

import { useState, useEffect } from 'react';
import { Button, Input, Chip, Tooltip } from "@heroui/react";

const FilterForm = ({ initialCity = '', initialMinPrice = '', initialMaxPrice = '' }) => {
  const [city, setCity] = useState(initialCity || '');
  const [minPrice, setMinPrice] = useState(initialMinPrice || '');
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice || '');
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);

  const cities = [
    'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 
    'Murcia', 'Palma', 'Las Palmas', 'Bilbao', 'Alicante', 'Córdoba', 
    'Valladolid', 'Vigo', 'Gijón', "L'Hospitalet de Llobregat", 
    'Vitoria-Gasteiz', 'A Coruña', 'Elche', 'Granada'
  ];

  const filteredCities = cities.filter(c => 
    c.toLowerCase().includes(city.toLowerCase())
  ).slice(0, 5);

  // Update query parameters when filters change
  useEffect(() => {
    // Cuando se actualiza el filtro, actualizamos la URL
    const queryParams = new URLSearchParams();
    if (city) queryParams.set('city', city);
    if (minPrice) queryParams.set('minPrice', minPrice);
    if (maxPrice) queryParams.set('maxPrice', maxPrice);

    window.history.replaceState({}, '', `?${queryParams.toString()}`);
  }, [city, minPrice, maxPrice]);

  const handleSearchClick = () => {
    // Refresh the current page to apply filters
    window.location.reload();
  };

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    setShowCitySuggestions(false);
  };

  // Rangos de precios populares
  const popularPriceRanges = [
    { min: '300', max: '600' },
    { min: '600', max: '900' },
    { min: '900', max: '1200' }
  ];

  const handlePriceRangeSelect = (min: string, max: string) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-conest-lightBlue/10">
      <div className="p-6 space-y-6">
        <div className="text-center mb-2">
          <p className="text-conest-mediumGray text-sm mt-1">Encuentra el piso perfecto para ti</p>
        </div>
        
        <div className="relative">
          <label htmlFor="city" className="inline-block text-sm font-medium text-conest-darkGray mb-2 bg-gradient-to-r from-conest-blue to-conest-mediumBlue bg-clip-text text-transparent">
            Ciudad
          </label>
          <div className="relative">
            <Input 
              type="text" 
              id="city"
              className="w-full bg-conest-lightBlue/5 border-conest-lightBlue/30 focus:border-conest-blue rounded-lg"
              placeholder="Introduce una ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onFocus={() => setShowCitySuggestions(true)}
              startContent={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-conest-mediumGray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            
            {showCitySuggestions && city && filteredCities.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-conest-lightBlue/20 rounded-lg shadow-lg max-h-60 overflow-auto">
                {filteredCities.map((c, index) => (
                  <div 
                    key={index} 
                    className="px-4 py-2 hover:bg-conest-lightBlue/10 cursor-pointer text-conest-darkGray transition-colors"
                    onClick={() => handleCitySelect(c)}
                  >
                    {c}
                  </div>
                ))}
              </div>
            )}
          </div>
          

        </div>

        <div className="space-y-5">
          <div>
            <label className="inline-block text-sm font-medium text-conest-darkGray mb-2 bg-gradient-to-r from-conest-blue to-conest-mediumBlue bg-clip-text text-transparent">
              Rango de precios
            </label>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Input 
                  type="number" 
                  id="minPrice"
                  className="w-full bg-conest-lightBlue/5 border-conest-lightBlue/30 focus:border-conest-blue rounded-lg"
                  placeholder="Mín €"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  startContent={
                    <span className="text-conest-mediumGray">€</span>
                  }
                />
              </div>
              
              <div className="relative">
                <Input 
                  type="number" 
                  id="maxPrice"
                  className="w-full bg-conest-lightBlue/5 border-conest-lightBlue/30 focus:border-conest-blue rounded-lg"
                  placeholder="Máx €"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  startContent={
                    <span className="text-conest-mediumGray">€</span>
                  }
                />
              </div>
            </div>
            
            <div className="mt-3">
              <p className="text-xs text-conest-mediumGray mb-2">Rangos populares:</p>
              <div className="flex flex-wrap gap-2">
                {popularPriceRanges.map((range, idx) => (
                  <Chip 
                    key={idx}
                    className="bg-conest-lightBlue/10 hover:bg-conest-lightBlue/20 text-conest-blue cursor-pointer transition-colors"
                    size="sm"
                    variant="flat"
                    onClick={() => handlePriceRangeSelect(range.min, range.max)}
                  >
                    {range.min}€ - {range.max}€
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Button
            color="primary"
            size="lg"
            className="w-full rounded-xl bg-gradient-to-r from-conest-blue to-conest-mediumBlue hover:opacity-90 text-white font-medium shadow-md hover:shadow-lg transition-all"
            onClick={handleSearchClick}
            startContent={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          >
            Buscar pisos
          </Button>
        </div>
        
        <div className="flex items-center justify-center mt-4">
          <Button
            variant="light"
            size="sm"
            className="text-conest-mediumGray"
            onClick={() => {
              setCity('');
              setMinPrice('');
              setMaxPrice('');
            }}
            startContent={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            }
          >
            Limpiar filtros
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;