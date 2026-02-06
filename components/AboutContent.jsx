export default function AboutContent() {
    return (
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Seasoning Life, One Meal at a Time
            </h2>
  
            <p className="text-gray-700 leading-relaxed mb-4">
              At Raj & Anand Agency, spices are not just ingredients — they are
              emotions. They bring families together, elevate everyday meals, and
              preserve the rich traditions of Indian cooking.
            </p>
  
            <p className="text-gray-700 leading-relaxed mb-6">
              We specialize in delivering authentic, high-quality spices sourced
              from India’s finest spice-growing regions. From trusted household
              classics to innovative blends designed for modern kitchens, our
              products ensure rich aroma, vibrant colour, and unforgettable taste
              in every dish.
            </p>
  
            <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition">
              Learn More
            </button>
          </div>
  
          {/* IMAGE */}
          <div>
            <img
              src="public/about/1.jpg"
              alt="About Raj & Anand Masale"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  