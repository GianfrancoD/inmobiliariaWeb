import { Search } from "lucide-react";

export const Heros = () => {
  return (
    <>
      <section className="relative h-screen">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Ciudad"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center mb-6">
            Encuentra tu hogar{" "}
            <span className="border-b-4 border-blue-500">perfecto</span>
          </h1>
          <p className="text-xl text-white text-center mb-8">
            Descubre las mejores propiedades en las mejores ubicaciones
          </p>
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-2">
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Buscar por ubicación..."
                className="flex-1 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
