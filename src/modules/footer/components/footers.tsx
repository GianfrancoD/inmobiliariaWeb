import { HomeIcon } from "lucide-react";

export const Footers = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <HomeIcon className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold">InmoPro</span>
              </div>
              <p className="text-gray-400">
                Tu socio de confianza en el mercado inmobiliario
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#properties"
                    className="text-gray-400 hover:text-white"
                  >
                    Propiedades
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Calle</li>
                <li>Carabobo, Venezuela</li>
                <li>+58 0412222222</li>
                <li>info@inmopro.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Suscríbete para recibir las últimas novedades
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} InmoPro. Todos los derechos
              reservados.
            </p>
            <span className="border-b-2 border-blue-500">
              Programador FullStack Gianfranco Di Berardino
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
