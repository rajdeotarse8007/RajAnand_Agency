import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* ABOUT */}
        <div>
          <h3 className="text-white font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Gallery & Events</Link></li>
            <li><Link href="#">Media & News</Link></li>
            <li><Link href="#">Exports</Link></li>
            <li><Link href="#">Offers</Link></li>
            <li><Link href="#">Life at Raj & Anand</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* CONTENT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Cooking with Raj & Anand</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Videos</Link></li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Cancellation Policy</Link></li>
            <li><Link href="#">Return Policy</Link></li>
            <li><Link href="#">Shipping Policy</Link></li>
            <li><Link href="#">Payment Policy</Link></li>
            <li><Link href="#">Disclaimer</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-4">Keep in Touch</h3>
          <div className="flex space-x-4 mb-6">
            <Link href="#" className="hover:text-white">Facebook</Link>
            <Link href="#" className="hover:text-white">Instagram</Link>
            <Link href="#" className="hover:text-white">YouTube</Link>
            <Link href="#" className="hover:text-white">LinkedIn</Link>
          </div>

          <h4 className="text-white font-semibold mb-2">Payment Accepted</h4>
          <p className="text-sm text-gray-400">
            Visa • MasterCard • UPI • Net Banking
          </p>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        <p>
          © 2026 Raj & Anand Masale | All Rights Reserved
        </p>
        <p className="mt-1">
          Powered By <span className="text-white">Sachin Deotarse</span>
        </p>
      </div>
    </footer>
  );
}
