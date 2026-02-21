"use client";

import { useEffect, useState } from "react";

const images = [
  "https://scontent.fpnq13-5.fna.fbcdn.net/v/t39.30808-6/473438773_627238712992619_4032268673460601074_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2a1932&_nc_ohc=a4J6a5YvgB0Q7kNvwGN0MCD&_nc_oc=AdlZtIfeBP9rW3vScay1sZR-e4YzrYu4IteIChCtZtABLrYXsE_cmxzMPhAsGj7fG4KV3h3-xxQxncheAwzu72kT&_nc_zt=23&_nc_ht=scontent.fpnq13-5.fna&_nc_gid=hSsStOL-BC9HMXM5dNyo6A&oh=00_AfvU-anf6lCXQj1C_Ob-t7T-lh-pdJdwy4PHpBW5NaXF0w&oe=699F0DFE",
  "https://static.vecteezy.com/system/resources/thumbnails/066/206/039/small/delicate-saffron-strands-sweeping-across-aromatic-cumin-seed-landscape-photo.jpg",
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
        style={{ height: "520px" }}   
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
