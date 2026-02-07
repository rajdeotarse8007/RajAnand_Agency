import Link from "next/link";

const categories = [
  {
    title: "Spl. Mirchi Powder",
    description:
      "Made from carefully selected red chilies, our Mirchi Powder delivers a perfect balance of heat and rich red color, enhancing the taste and appearance of every dish.",
    image:
      "https://kunshmasale.com/wp-content/uploads/cache/2023/12/12/1504381449.jpg",
  },
  {
    title: "Spl. Halad Powder",
    description:
      "Our Halad Powder is finely ground from premium turmeric roots, offering a natural golden color, warm aroma, and trusted purity for everyday cooking.",
    image:
      "https://kunshmasale.com/wp-content/uploads/cache/2023/12/3/3780232060.jpg",
  },
  {
    title: "Spl. Kanda Lasun Masala",
    description:
      "A signature blend of onion, garlic, and hand-picked spices, our Kanda Lasun Masala brings authentic Maharashtrian flavor and deep richness to curries and gravies.",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Spl. Dhana Power",
    description:
      "Prepared from high-quality coriander seeds, this powder adds a fresh aroma and mild, earthy flavor that elevates traditional Indian recipes.",
    image:
      "https://kunshmasale.com/wp-content/uploads/cache/2023/12/5/647099268.jpg",
  },
];

export default function ProductCategories() {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, #FFF5F5 0%, #FFFFFF 65%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-wide"
            style={{
              color: "#C10A0A",
              textShadow: "0 3px 8px rgba(193,10,10,0.35)",
            }}
          >
            Our Special Categories
          </h2>
          <p className="mt-5 text-gray-700 text-lg max-w-2xl mx-auto">
            Discover our carefully curated spice categories, crafted to bring
            authentic taste, aroma, and tradition to every kitchen.
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow:
                  "0 15px 35px rgba(0,0,0,0.08)",
              }}
            >
              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-8 text-center">
                <h3
                  className="text-2xl font-extrabold mb-3"
                  style={{ color: "#111827" }}
                >
                  {category.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {category.description}
                </p>

                {/* BUTTON */}
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #C10A0A, #FF4848)",
                    boxShadow:
                      "0 10px 25px rgba(193,10,10,0.4)",
                  }}
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
