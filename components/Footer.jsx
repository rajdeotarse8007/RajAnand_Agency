import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 mt-20">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* BRAND / ABOUT */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
            🌶️ RajAnand Masale
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Bringing authentic Indian spices crafted with purity,
            tradition, and rich flavour to every kitchen.
          </p>
          <p className="text-sm text-gray-400">
            📍 Shrigonda, Maharashtra <br />
            📞 +91 9922356880
          </p>
        </div>

        {/* ABOUT LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "Gallery & Events",
              "Media & News",
              "Exports",
              "Offers",
              "Careers",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-[#FF4848] transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-[#FF4848] transition">
                Cooking with RajAnand
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#FF4848] transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#FF4848] transition">
                Recipe Videos
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL & PAYMENTS */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Connect With Us
          </h3>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-[#1877F2] transition"
            >
              <FaFacebookF className="text-white text-lg" />
            </Link>

            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500 transition"
            >
              <FaInstagram className="text-white text-lg" />
            </Link>

            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-[#FF0000] transition"
            >
              <FaYoutube className="text-white text-lg" />
            </Link>

            <Link
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-[#0A66C2] transition"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </Link>
          </div>

          {/* PAYMENTS */}
          <h4 className="text-white font-semibold mb-2">
            Payment Accepted
          </h4>
          <p className="text-sm text-gray-400">
            Visa • MasterCard • UPI • Net Banking
          </p>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            RajAnand Agency
          </span>{" "}
          | All Rights Reserved
        </p>
        <p className="mt-1">
          Powered by Kunsh Masale
        </p>
      </div>
    </footer>
  );
}
