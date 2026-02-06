import { supabase } from "@/lib/supabaseClient";

export default async function ProductDetails({ params }) {
  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
}
