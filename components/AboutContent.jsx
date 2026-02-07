export default function AboutContent() {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(180deg, #FFF5F5 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="relative">
          <img
            src="/about/about1.jpg"
            alt="About Raj & Anand Masale"
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
          />

          {/* subtle border accent */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-red-200 pointer-events-none"></div>
        </div>

        {/* TEXT */}
        <div>
          <h3
            className="text-3xl md:text-4xl font-extrabold mb-6"
            style={{
              color: "#C10A0A",
              textShadow: "0 1px 3px rgba(193,10,10,0.25)",
            }}
          >
            The Essence of Authentic Indian Flavours
          </h3>

          <p className="text-gray-700 leading-relaxed text-lg mb-5">
            At <span className="font-semibold text-gray-900">RajAnand Agency</span>,
            we believe that spices are more than just ingredients — they are emotions.
            A pinch of turmeric or a dash of cumin does more than season a dish; it brings
            families together, elevates everyday meals, and preserves the rich traditions
            of Indian cooking.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Our journey is rooted in a passion for authenticity. We specialize in sourcing
            high-quality spices from India’s premier growing regions, ensuring every packet
            captures the true essence of the land. From trusted household classics to
            innovative blends crafted for the modern kitchen, our products are defined by
            their rich aroma, vibrant color, and unforgettable taste.
          </p>
        </div>
      </div>
    </section>
  );
}
