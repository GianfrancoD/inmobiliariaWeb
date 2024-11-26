import { HomeIcon, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export const Headers = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sendmenssage = () => {
    const url = `https://wa.me/+5804124122809?text=Hola%20me%20interesa%20tu%20servicio`;
    window.open(url, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className=" mx-auto px-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <HomeIcon className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-blue-600">
              InmoPro
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              Inicio
            </a>
            <a
              href="#properties"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              Propiedades
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              Quiénes Somos
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              Testimonios
            </a>
            <a
              href="#blog"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              Blog
            </a>
          </nav>
          <div className="flex items-center">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 hidden md:block"
              onClick={sendmenssage}
            >
              <div className="flex gap-1 ">
                <MessageCircle size={16} className="m-1" /> Contactar
              </div>
            </button>
            <button
              className="md:hidden text-blue-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-2">
          <a
            href="/"
            className="block py-2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Inicio
          </a>
          <a
            href="#properties"
            className="block py-2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Propiedades
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Quiénes Somos
          </a>
          <a
            href="#testimonials"
            className="block py-2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Testimonios
          </a>
          <a
            href="#blog"
            className="block py-2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Blog
          </a>
          <br />
          <hr />
          <br />
          <button
            className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={sendmenssage}
          >
            <div className="flex justify-center gap-1 ">
              <MessageCircle size={16} className="m-1" /> Contactar
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};
