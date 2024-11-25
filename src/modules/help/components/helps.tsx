import { motion } from "framer-motion";
import {
  //   ArrowRight,
  Building,
  DollarSign,
  Heart,
  Home,
  Key,
  Search,
} from "lucide-react";

export const Helps = () => {
  const services = [
    {
      title: "Comprar Propiedad",
      description:
        "Encuentra la casa de tus sueños entre nuestra amplia selección de propiedades",
      icon: Home,
      features: [
        "Búsqueda personalizada",
        "Asesoría financiera",
        "Visitas virtuales",
      ],
      cta: "Buscar Propiedades",
      bgGradient: "bg-blue-700",
      mainIcon: Search,
    },
    {
      title: "Vender Propiedad",
      description:
        "Obtén el mejor valor por tu propiedad con nuestro servicio profesional",
      icon: Building,
      features: [
        "Valoración gratuita",
        "Marketing digital",
        "Gestión completa",
      ],
      cta: "Vender Ahora",
      bgGradient: "bg-blue-500",
      mainIcon: DollarSign,
    },
    {
      title: "Rentar Propiedad",
      description:
        "Explora opciones de alquiler que se ajusten a tu estilo de vida",
      icon: Key,
      features: [
        "Sin comisiones ocultas",
        "Contratos seguros",
        "Mantenimiento incluido",
      ],
      cta: "Ver Rentals",
      bgGradient: "bg-blue-300",
      mainIcon: Heart,
    },
  ];
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo?, ¿Qué Estás{" "}
            <span className="border-b-4 border-yellow-500">Buscando</span>?
          </h2>
          <p className="text-gray-600">
            Descubre todas las formas en que podemos ayudarte con tus
            necesidades inmobiliarias y facilidades.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Top Gradient Banner */}
              <div className={`h-2 bg-gradient-to-r ${service.bgGradient}`} />

              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <service.icon className="h-6 w-6 text-emerald-600 mr-3" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                    <service.mainIcon className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button  */}
                {/* Boton de los cards */}
                {/* <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-gradient-to-r bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center group"
                >
                  {service.cta}
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
