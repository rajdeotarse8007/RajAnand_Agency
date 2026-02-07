export default function AboutHero() {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(180deg, #FFC2C2 0%, #FFF5F5 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-wide"
          style={{
            color: "#C10A0A",
            textShadow: `
              0 2px 4px rgba(0,0,0,0.15),
              0 0 12px rgba(193,10,10,0.35)
            `,
          }}
        >
          About Us
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Discover the story behind our passion for authentic, high-quality
          masala products crafted to elevate every meal.
        </p>

      </div>
    </section>
  );
}

  