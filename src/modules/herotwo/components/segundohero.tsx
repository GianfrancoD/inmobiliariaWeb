export const Two = () => {
  const cities = [
    {
      id: 1,
      name: "Madrid",
      image:
        "https://plus.unsplash.com/premium_photo-1689284705816-e470cd696d0c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Barcelona",
      image:
        "https://images.unsplash.com/photo-1508939546992-1252a12b4299?q=80&w=2562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Valencia",
      image:
        "https://images.unsplash.com/photo-1721075761993-11b67bc66fd4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Sevilla",
      image:
        "https://images.unsplash.com/photo-1664964318768-9af3bb82e8e8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Encuentra propiedades en estas{" "}
          <span className="border-b-4 border-yellow-400">ciudades</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city) => (
            <div
              key={city.id}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={city.image}
                alt={city.name}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{city.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
