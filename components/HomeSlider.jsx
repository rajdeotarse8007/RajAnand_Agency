"use client";

import { useEffect, useState } from "react";

const images = [
  "https://scontent.fpnq7-9.fna.fbcdn.net/v/t39.30808-6/473438773_627238712992619_4032268673460601074_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=MzuoU-ZrD50Q7kNvwFfcYzB&_nc_oc=AdmRtITySVzsMp8i5ZX9WntDx_woKuTkwwUP_F6sZxkJlC29cKImDghbSM3B5zxwPezygpt2V9fNXukO61qNd_aF&_nc_zt=23&_nc_ht=scontent.fpnq7-9.fna&_nc_gid=qy28yD1-kuB1yYEMQDdZ_Q&oh=00_AftMMUDJCpR7g4eIiwT2EbIagI-eomZEXfUCdv1afWtDDw&oe=698A2E3E",
  "/slider/slide2.jpg",
  "/slider/slide3.jpg",
  "/slider/slide4.jpg",
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Raj & Anand Masale Banner"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
