import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bath, Bed, Box, Car, Key, MapPin, X } from "lucide-react";

interface Property {
  id: number;
  name: string;
  info: string;
  precio: string;
  destacados?: string;
  nuevos?: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
  venta: string;
  Parking: number;
  key: number;
}

export const Propiedades = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  const cities: Property[] = [
    {
      id: 1,
      name: "Madrid",
      info: "Apartamento de Lujo en Gran Vía",
      precio: "100.000$",
      destacados: "Destacado",
      nuevos: "Nuevo",
      image:
        "https://plus.unsplash.com/premium_photo-1661955033564-dc850d38b7df?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bedrooms: 2,
      bathrooms: 2,
      area: 100,
      location: "Gran Vía, Madrid",
      venta: "Vendida",
      Parking: 4,
      key: 3,
    },
    {
      id: 2,
      name: "Barcelona",
      info: "Encantadora Casa en Vila de Gràcia",
      precio: "300.000$",
      image:
        "https://images.unsplash.com/photo-1485087322071-235c96bb4297?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      location: "Vila de Gràcia, Barcelona",
      venta: "",
      destacados: "Disponible",
      Parking: 2,
      key: 4,
    },
    {
      id: 3,
      name: "Valencia",
      info: "Moderno Loft en el Centro Histórico",
      precio: "125.000$",
      nuevos: "Nuevo",
      image:
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bedrooms: 1,
      bathrooms: 1,
      area: 75,
      location: "Centro Histórico, Valencia",
      venta: "Vendida",
      Parking: 5,
      key: 2,
    },
    {
      id: 4,
      name: "Sevilla",
      info: "Villa con Jardín en Triana",
      precio: "400.000$",
      nuevos: "Nuevo",
      image:
        "https://plus.unsplash.com/premium_photo-1661876567457-d9bd96f4b67f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bedrooms: 4,
      bathrooms: 3,
      area: 200,
      location: "Triana, Sevilla",
      venta: "Vendida",
      Parking: 7,
      key: 1,
    },
  ];

  return (
    <>
      <section id="properties" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Propiedades{" "}
            <span className="border-b-4 border-blue-500">destacadas</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={`Propiedad ${item.name}`}
                    className="object-cover w-full h-full"
                  />
                  {item.destacados && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                      {item.destacados}
                    </div>
                  )}
                  {item.nuevos && (
                    <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full">
                      {item.nuevos}
                    </div>
                  )}
                  {item.venta && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full">
                      {item.venta}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.info}</h3>{" "}
                  <p className="text-gray-600 mb-4">{item.location}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {item.precio}
                    </span>
                    <button
                      className="text-blue-600 hover:underline font-semibold"
                      onClick={() => setSelectedProperty(item)}
                    >
                      Ver detalles
                    </button>
                  </div>
                  {/* <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" />
                      <span>{item.bedrooms} hab</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" />
                      <span>{item.bathrooms} baños</span>
                    </div>
                    <div className="flex items-center">
                      <Box size={16} className="mr-1" />
                      <span>{item.area} m²</span>
                    </div>
                    <div className="flex items-center">
                      <Car size={16} className="mr-1" />
                      <span>{item.Parking} parking</span>
                    </div>
                    <div className="flex items-center">
                      <Key size={16} className="mr-1" />
                      <span>{item.key} llaves</span>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedProperty.info}
                </h2>
                <p className="text-gray-600 mb-4 flex items-center">
                  <MapPin size={20} className="mr-2" />
                  {selectedProperty.location}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Bed size={20} className="mr-2 text-blue-600" />
                    <span>{selectedProperty.bedrooms} Habitaciones</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={20} className="mr-2 text-blue-600" />
                    <span>{selectedProperty.bathrooms} Baños</span>
                  </div>
                  <div className="flex items-center">
                    <Box size={20} className="mr-2 text-blue-600" />
                    <span>{selectedProperty.area} m²</span>
                  </div>
                  <div className="flex items-center">
                    <Car size={20} className="mr-2 text-blue-600" />
                    <span>{selectedProperty.Parking} Plazas de parking</span>
                  </div>
                  <div className="flex items-center">
                    <Key size={20} className="mr-2 text-blue-600" />
                    <span>{selectedProperty.key} Llaves</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-blue-600">
                    {selectedProperty.precio}
                  </span>
                  {selectedProperty.venta ? (
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {selectedProperty.venta}
                    </span>
                  ) : (
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Disponible
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Características adicionales
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Cocina equipada</li>
                    <li>Terraza</li>
                    <li>Aire acondicionado</li>
                    <li>Calefacción central</li>
                  </ul>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contactar agente
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
