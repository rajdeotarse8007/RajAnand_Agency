"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import CategorySelector from "./CategorySelector";
import ProductGrid from "./ProductGrid";

export default function ProductSection() {
  const [category, setCategory] = useState("special");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", category)
        .limit(10);

      if (!error) setProducts(data || []);
    };

    fetchProducts();
  }, [category]);

  return (
    <section className="bg-white">
      {/* Category selector */}
      <CategorySelector selected={category} onSelect={setCategory} />

      {/* Products */}
      <ProductGrid products={products} />
    </section>
  );
}
