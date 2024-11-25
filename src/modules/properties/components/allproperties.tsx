import { Bath, Bed, Box, Car, Key } from "lucide-react";

export const Propiedades = () => {
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
  const cities: Property[] = [
    {
      id: 1,
      name: "Madrid",
      info: "Apartamento de Lujo en Gran Vía",
      precio: "100.000€",
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
      precio: "300.000€",
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
      precio: "125.000€",
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
      precio: "400.000€",
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
                    alt={`Propiedad ${item}`}
                    className="object-cover w-full h-full"
                  />
                  {item.destacados ? (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                      {item.destacados}
                    </div>
                  ) : (
                    <div className="absolute top-4 left-4 bg-blue-0 text-white px-3 py-1 rounded-full">
                      {item.destacados}
                    </div>
                  )}
                  {item.nuevos ? (
                    <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full">
                      {item.nuevos}
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4 bg-yellow-0 text-white px-3 py-1 rounded-full">
                      {item.nuevos}
                    </div>
                  )}
                  {item.venta ? (
                    <div className="absolute top-[80px] right-[100px] bg-green-500 text-white px-20 py-5 rounded-full">
                      {item.venta}
                    </div>
                  ) : (
                    <div className="absolute top-[80px] right-[100px] bg-green-0 text-white px-20 py-5 rounded-full">
                      {item.venta}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.info}</h3>{" "}
                  <p className="text-gray-600 mb-4">{item.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {item.precio}
                    </span>
                    <button className="text-blue-600 hover:underline">
                      Ver detalles
                    </button>
                  </div>
                  <div className="flex m-1">
                    <div className="flex items-center flex-wrap gap-2">
                      <div className="flex gap-1">
                        <Bed size={16} className="mr-0" />
                        <span className="text-sm ">{item.bathrooms} hab</span>
                      </div>
                      <div className="flex gap-1">
                        <Bath size={16} className="mr-0" />
                        <span className="text-sm">{item.bedrooms} hab</span>
                      </div>
                      <div className="flex gap-1">
                        <Box size={16} className="mr-0" />
                        <span className="text-sm">{item.area} m²</span>
                      </div>
                      <div className="flex">
                        <Car size={16} className="mr-1" />
                        <span className="text-sm">{item.Parking}</span>
                      </div>
                      <div className="flex">
                        <Key size={16} className="mr-1" />
                        <span className="text-sm">{item.key}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
