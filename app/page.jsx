import HomeSlider from "@/components/HomeSlider";
import TrustSection from "@/components/TrustSection";
import ProductCategories from "@/components/ProductCategories";
export default function Home() {
  return (
    <>
      {/* Slider Section */}
      <HomeSlider />

      {/* You can add product sections below later */}
      <section className="max-w-7xl mx-auto px-4 py-10 ">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to RajAnand Agency
        </h2>
        <p className="text-gray-600">
          Premium quality spices delivered fresh to your home.
        </p>
      </section>
      <ProductCategories />
      <TrustSection />
    </>
  );
}
