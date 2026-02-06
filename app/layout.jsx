import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <TopHeader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
