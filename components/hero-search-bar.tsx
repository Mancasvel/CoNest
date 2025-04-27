"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, Calendar, Users, Home, Building } from "lucide-react"

export function HeroSearchBar() {
  const [location, setLocation] = useState("")

  return (
    <Card className="w-full border-none bg-white/80 dark:bg-blue-dark/60 backdrop-blur-md shadow-xl">
      <CardContent className="p-6 md:p-8">
        <Tabs defaultValue="estudiante" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-blue-light/10 dark:bg-blue-light/5 p-1 rounded-full">
            <TabsTrigger
              value="estudiante"
              className="rounded-full data-[state=active]:bg-blue-primary data-[state=active]:text-white dark:data-[state=active]:bg-blue-primary"
            >
              Busco alojamiento
            </TabsTrigger>
            <TabsTrigger
              value="anfitrion"
              className="rounded-full data-[state=active]:bg-yellow-primary data-[state=active]:text-blue-dark dark:data-[state=active]:bg-yellow-primary"
            >
              Ofrezco alojamiento
            </TabsTrigger>
          </TabsList>

          <TabsContent value="estudiante" className="space-y-6 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-primary/60 h-5 w-5">
                  <MapPin className="h-5 w-5" />
                </div>
                <Input
                  type="text"
                  placeholder="¿Dónde quieres vivir?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12 bg-white dark:bg-blue-dark/30 border-blue-light/20 rounded-lg"
                />
              </div>

              <div className="md:col-span-3 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-primary/60 h-5 w-5">
                  <Calendar className="h-5 w-5" />
                </div>
                <Select>
                  <SelectTrigger className="pl-10 h-12 bg-white dark:bg-blue-dark/30 border-blue-light/20 rounded-lg">
                    <SelectValue placeholder="Disponibilidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inmediata">Inmediata</SelectItem>
                    <SelectItem value="1mes">En 1 mes</SelectItem>
                    <SelectItem value="3meses">En 3 meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-3 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-primary/60 h-5 w-5">
                  <Users className="h-5 w-5" />
                </div>
                <Select>
                  <SelectTrigger className="pl-10 h-12 bg-white dark:bg-blue-dark/30 border-blue-light/20 rounded-lg">
                    <SelectValue placeholder="Presupuesto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="200">Hasta €200/mes</SelectItem>
                    <SelectItem value="300">Hasta €300/mes</SelectItem>
                    <SelectItem value="400">Hasta €400/mes</SelectItem>
                    <SelectItem value="500">Hasta €500/mes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-1">
                <Button className="w-full h-12 bg-blue-primary hover:bg-blue-primary/90 dark:bg-blue-primary dark:hover:bg-blue-primary/90 rounded-lg">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Buscar</span>
                </Button>
              </div>
            </div>

            <Button className="w-full h-12 bg-green-primary hover:bg-green-primary/90 text-white rounded-lg text-base font-medium">
              Encontrar mi nuevo hogar
            </Button>
          </TabsContent>

          <TabsContent value="anfitrion" className="space-y-6 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-primary/60 h-5 w-5">
                  <MapPin className="h-5 w-5" />
                </div>
                <Input
                  type="text"
                  placeholder="¿Dónde está tu vivienda?"
                  className="pl-10 h-12 bg-white dark:bg-blue-dark/30 border-blue-light/20 rounded-lg"
                />
              </div>

              <div className="md:col-span-3 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-primary/60 h-5 w-5">
                  <Home className="h-5 w-5" />
                </div>
                <Select>
                  <SelectTrigger className="pl-10 h-12 bg-white dark:bg-blue-dark/30 border-blue-light/20 rounded-lg">
                    <SelectValue placeholder="Tipo de espacio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="habitacion">Habitación</SelectItem>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="casa">Casa completa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-3 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-primary/60 h-5 w-5">
                  <Building className="h-5 w-5" />
                </div>
                <Select>
                  <SelectTrigger className="pl-10 h-12 bg-white dark:bg-blue-dark/30 border-blue-light/20 rounded-lg">
                    <SelectValue placeholder="Disponibilidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inmediata">Inmediata</SelectItem>
                    <SelectItem value="1mes">En 1 mes</SelectItem>
                    <SelectItem value="3meses">En 3 meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-1">
                <Button className="w-full h-12 bg-blue-primary hover:bg-blue-primary/90 dark:bg-blue-primary dark:hover:bg-blue-primary/90 rounded-lg">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Buscar</span>
                </Button>
              </div>
            </div>

            <Button className="w-full h-12 bg-yellow-primary hover:bg-yellow-primary/90 text-blue-dark rounded-lg text-base font-medium">
              Publicar mi espacio
            </Button>
          </TabsContent>
        </Tabs>

        <div className="mt-8 pt-6 border-t border-blue-light/10 dark:border-blue-light/5 flex flex-wrap gap-6 justify-center text-sm text-blue-dark/70 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-primary"></div>
            <span>+500 alojamientos disponibles</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-primary"></div>
            <span>Verificación de perfiles</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-primary"></div>
            <span>Ahorra hasta un 70% en alojamiento</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-primary"></div>
            <span>Soporte 24/7</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
