"use client";

import { useEffect, useState } from "react";

const images = [
  "https://static.vecteezy.com/system/resources/thumbnails/032/160/878/small_2x/world-of-flavors-a-flavorful-universe-of-spices-herbs-and-seasonings-ai-generated-photo.jpg",
  "https://tse4.mm.bing.net/th/id/OIP.1T3RJRHtxCuOrmCqdxpemAHaEP?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://kunshmasale.com/wp-content/uploads/2024/02/3-1920x964.webp",
  "https://kunshmasale.com/wp-content/uploads/2024/02/3-2-1920x964.webp",
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // auto slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="relative w-full transition-all duration-700 ease-in-out"
        style={{ height: "680px" }}   
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
