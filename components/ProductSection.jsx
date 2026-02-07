"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import CategorySelector from "./CategorySelector";
import ProductGrid from "./ProductGrid";

export default function ProductSection() {
  const [category, setCategory] = useState("special");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", category)
        .limit(10);

      if (!error) setProducts(data || []);
      setLoading(false);
    };

    fetchProducts();
  }, [category]);

  return (
    <section
      className="py-28"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFF3F3 40%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-wide"
            style={{
              color: "#C10A0A",
              textShadow: "0 3px 8px rgba(193,10,10,0.35)",
            }}
          >
            Our Products
          </h2>
          <p className="mt-5 text-gray-700 text-lg max-w-2xl mx-auto">
            Explore our wide range of authentic spices, carefully selected and
            blended to bring rich flavour and aroma to every meal.
          </p>
        </div>

        {/* CATEGORY SELECTOR */}
        <div className="mb-24">
          <CategorySelector selected={category} onSelect={setCategory} />
        </div>

        {/* PRODUCT GRID */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-72 rounded-2xl bg-gray-100 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </section>
  );
}
