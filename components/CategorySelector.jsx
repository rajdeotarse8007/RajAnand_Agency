"use client";

const categories = [
  {
    key: "special",
    label: "Special",
    image: "https://via.placeholder.com/300x180",
  },
  {
    key: "super",
    label: "Super",
    image: "https://via.placeholder.com/300x180",
  },
  {
    key: "non-veg-special",
    label: "Non-Veg Special",
    image: "https://via.placeholder.com/300x180",
  },
];

export default function CategorySelector({ selected, onSelect }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-center gap-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onSelect(cat.key)}
            className={`transition transform ${
              selected === cat.key
                ? "scale-105"
                : "hover:scale-105 opacity-90"
            }`}
          >
            <div className="w-64">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-44 object-cover rounded-lg border"
              />
              <p className="mt-4 text-center text-xl font-bold">
                {cat.label}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
