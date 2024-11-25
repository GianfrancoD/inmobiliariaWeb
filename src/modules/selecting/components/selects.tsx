import { Clock, HomeIcon, Shield } from "lucide-react";

export const Selecting = () => {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por qué{" "}
            <span className="border-b-4 border-yellow-500">elegirnos</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HomeIcon,
                title: "Amplia selección",
                description: "Miles de propiedades disponibles",
              },
              {
                icon: Clock,
                title: "Rápido y eficiente",
                description: "Proceso simplificado de búsqueda",
              },
              {
                icon: Shield,
                title: "100% Confiable",
                description: "Garantía en cada transacción",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <item.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
