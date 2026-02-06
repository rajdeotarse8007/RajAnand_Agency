const categories = [
    {
      title: "BLENDED SPICES",
      description:
        "Traditional Indian spice blends crafted from premium ingredients sourced from renowned spice regions.",
      image:
        "https://www.everestspices.com/sites/default/files/blended-spices.jpg",
    },
    {
      title: "PURE SPICES",
      description:
        "Authentic, rich and aromatic spices that form the backbone of Indian cuisine.",
      image:
        "https://www.everestspices.com/sites/default/files/pure-spices.jpg",
    },
    {
      title: "ASAFOETIDA",
      description:
        "High-quality hing that adds strong aroma and distinctive flavour to every tadka.",
      image:
        "https://www.everestspices.com/sites/default/files/hing.jpg",
    },
    {
      title: "EXOTIC RANGE",
      description:
        "Premium saffron and speciality blends for royal and festive Indian recipes.",
      image:
        "https://www.everestspices.com/sites/default/files/exotic.jpg",
    },
    {
      title: "PASTE",
      description:
        "Fresh ginger-garlic pastes made from hand-selected ingredients.",
      image:
        "https://www.everestspices.com/sites/default/files/paste.jpg",
    },
    {
      title: "TASTEETO",
      description:
        "A modern range of seasonings inspired by global cuisines.",
      image:
        "https://www.everestspices.com/sites/default/files/tasteeto.jpg",
    },
  ];
  
  export default function ProductCategories() {
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          <h2 className="text-3xl font-bold mb-10">
            Products You Will Love
          </h2>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((item, index) => (
              <div
                key={index}
                className="group border rounded-lg overflow-hidden bg-white hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
  
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.description}
                  </p>
  
                  <button className="text-red-600 font-medium group-hover:underline">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  