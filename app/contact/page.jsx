export default function ContactPage() {
  return (
    <div
      className="min-h-screen"
      style={{ 
        backgroundColor: "#fbe9eb", // Clean, off-white background
        backgroundImage: "radial-gradient(#e5e7eb 0.5px, transparent 0.5px)", 
        backgroundSize: "24px 24px" // Subtle professional grid pattern
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Page Title */}
        <div className="mb-20 text-center md:text-left">
          <h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
            style={{ color: "#1a1a1a" }}
          >
            Get in <span style={{ color: "#9b1c1c" }}>Touch</span>
          </h1>
          <div className="h-1.5 w-20 bg-[#9b1c1c] mt-6 mb-6 rounded-full mx-auto md:mx-0"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Have a question about our products or your order? Our team is here to 
            provide the support you need. Reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Address Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-[#fff5f5] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#9b1c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-800">Our Address</h2>
            <p className="text-gray-600 leading-relaxed">
              Shikshk Colony Shrigonda,<br />
              Mandavgoan Road,<br />
              Shrigonda 413701
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-[#fff5f5] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#9b1c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-800">Contact Us</h2>
            <p className="text-lg font-semibold">
              <a
                href="tel:9922356880"
                className="hover:text-[#9b1c1c] transition-colors"
                style={{ color: "#4b5563" }}
              >
                +91 9922356880
              </a>
            </p>
            <p className="text-sm text-gray-400 mt-2 font-medium uppercase tracking-wider">Mon-Sat 9am to 6pm</p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-[#fff5f5] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#9b1c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-800">Email Us</h2>
            <p className="text-lg font-semibold break-words">
              <a
                href="mailto:sachindeotarse149@gmail.com"
                className="hover:text-[#9b1c1c] transition-colors"
                style={{ color: "#4b5563" }}
              >
                sachindeotarse149@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-400 mt-2 font-medium uppercase tracking-wider">Response within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}