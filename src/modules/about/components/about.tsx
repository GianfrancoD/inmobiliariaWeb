export const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quiénes <span className="border-b-4 border-blue-500">somos</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nuestro equipo"
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Tu socio de confianza en el mercado inmobiliario
              </h3>
              <p className="text-gray-600 mb-6">
                Con más de 15 años de experiencia en el sector inmobiliario, nos
                dedicamos a hacer realidad los sueños de nuestros clientes.
                Nuestro equipo de profesionales altamente cualificados trabaja
                incansablemente para ofrecer un servicio personalizado y de
                calidad.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Conoce más sobre nosotros
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
