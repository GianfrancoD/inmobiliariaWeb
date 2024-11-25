export const Testimonios = () => {
  return (
    <>
      <section id="testimonials" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Lo que dicen nuestros{" "}
            <span className="border-b-4 border-white">clientes</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María García",
                role: "Compradora",
                text: "Excelente servicio y atención personalizada. Encontraron la casa de mis sueños.",
              },
              {
                name: "Juan Pérez",
                role: "Vendedor",
                text: "Proceso de venta rápido y profesional. Superaron mis expectativas.",
              },
              {
                name: "Ana Martínez",
                role: "Inversora",
                text: "Gran equipo de profesionales. Siempre atentos a mis necesidades.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
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
