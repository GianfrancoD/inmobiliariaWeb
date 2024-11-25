export const Noticias = () => {
  const noticias = [
    {
      title: "Tendencias del mercado inmobiliario 2024",
      excerpt:
        "Descubre las últimas tendencias que están dando forma al mercado...",
      imagen:
        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=2767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Guía para compradores primerizos",
      excerpt:
        "Todo lo que necesitas saber antes de comprar tu primera vivienda...",
      imagen:
        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=2767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Inversión en propiedades",
      excerpt: "Consejos expertos para maximizar tu inversión inmobiliaria...",
      imagen:
        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=2767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Últimas <span className="border-b-4 border-blue-500">noticias</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {noticias.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-[30vh]">
                  <img
                    src={post.imagen}
                    alt={post.title}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-blue-600 hover:underline">
                    Leer más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
