import Image from "next/image";

export default function TrustSection() {
  const items = [
    {
      title: "100% Satisfaction",
      subtitle: "Try it to love it!",
      img: "https://zofffoods.com/cdn/shop/files/Frame_22_5554f962-42ac-41e0-89b9-2a0241ba9c18_x162.jpg?v=1735988603",
    },
    {
      title: "100% Genuine Products",
      subtitle: "Guaranteed quality",
      img: "https://zofffoods.com/cdn/shop/files/Frame_23_x162.jpg?v=1735988564",
    },
    {
      title: "Membership Discounts",
      subtitle: "Join “ZING” and get 40% off",
      img: "https://zofffoods.com/cdn/shop/files/Frame_22_1_x162.jpg?v=1735988564",
    },
    {
      title: "Free Shipping",
      subtitle: "On orders above Rs 249/-",
      img: "https://zofffoods.com/cdn/shop/files/Frame_23_1_x162.jpg?v=1735988564",
    },
  ];

  return (
    <section className="bg-white py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={80}
              height={80}
              className="mb-4 object-contain"
            />
            <h3 className="font-bold text-lg text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
