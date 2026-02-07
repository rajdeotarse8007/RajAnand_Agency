"use client";

const categories = [
  {
    key: "special",
    label: "Special",
    image: "/category/special.jpg",
    tagline: "Everyday Authentic Taste",
  },
  {
    key: "super",
    label: "Super",
    image: "/category/super.jpg",
    tagline: "Premium Handpicked Spices",
  },
  {
    key: "non-veg-special",
    label: "Non-Veg Special",
    image: "/category/nonveg.jpg",
    tagline: "Bold & Rich Flavours",
  },
];

export default function CategorySelector({ selected, onSelect }) {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, #FFF1F1 0%, #FFFFFF 60%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADING */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-wide text-red-700"
          >
            Explore Our Categories
          </h2>
          <p className="mt-5 text-gray-700 text-lg max-w-2xl mx-auto">
          Expertly curated spice selections crafted to deliver authentic flavor and rich aroma in every dish.
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="flex justify-center gap-14 flex-wrap">
          {categories.map((cat) => {
            const isActive = selected === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => onSelect(cat.key)}
                className="group focus:outline-none"
              >
                <div
                  className={`relative w-[300px] rounded-3xl overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "scale-105 border-2 border-red-700 shadow-lg"
                      : "hover:scale-105 border border-gray-200 shadow-md"
                  }`}
                >
                  {/* IMAGE */}
                  <div className="relative h-56">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* SOFT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="bg-white text-center py-7 px-6">
                    <p
                      className={`text-2xl font-extrabold tracking-wide ${
                        isActive ? "text-red-700" : "text-gray-900"
                      }`}
                    >
                      {cat.label}
                    </p>

                    <p className="mt-2 text-sm text-gray-600">
                      {cat.tagline}
                    </p>

                    {/* ACTIVE INDICATOR */}
                    {isActive && (
                      <div className="mt-4 inline-block rounded-full px-4 py-1 text-xs font-semibold text-red-700 border border-red-700">
                        Selected
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
