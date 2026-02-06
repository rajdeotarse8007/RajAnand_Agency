"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import CategorySelector from "@/components/CategorySelector";
import ProductGrid from "@/components/ProductGrid";

export default function ProductsPage() {
  const [category, setCategory] = useState("special");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("category", category)
        .limit(10); // ensure 10 products

      setProducts(data || []);
    };

    fetchProducts();
  }, [category]);

  return (
    <>
      <CategorySelector selected={category} onSelect={setCategory} />
      <ProductGrid products={products} />
    </>
  );
}
