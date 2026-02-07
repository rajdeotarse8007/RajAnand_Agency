"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const WHATSAPP_NUMBER = "9623748071";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [packSize, setPackSize] = useState("100 gm");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("kg");

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleWhatsAppOrder = () => {
    if (!quantity) {
      alert("Please enter quantity");
      return;
    }

    const message = `
Hello RajAnand Agency 👋

I would like to place an order.

🛒 Product: ${product.name}
📦 Pack Size: ${packSize}
⚖️ Quantity: ${quantity} ${unit}

Please confirm availability and next steps.
    `;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (loading) {
    return (
      <div className="py-32 text-center text-gray-600">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-32 text-center text-gray-800">
        Product not found
      </div>
    );
  }

  return (
    <section
      className="py-28"
      style={{
        background:
          "linear-gradient(180deg, #FFF1F1 0%, #FFFFFF 45%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT – PRODUCT SHOWCASE */}
          <div>
            <div className="relative bg-white rounded-3xl border shadow-lg overflow-hidden">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-[480px] object-cover"
              />

              {/* BADGE */}
              <span className="absolute top-5 left-5 bg-red-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                Premium Quality
              </span>
            </div>

            <div className="mt-12">
              <h1 className="text-4xl font-extrabold text-gray-900">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mt-4 mb-6">
                <div className="w-20 h-1 bg-red-700 rounded-full" />
                <span className="text-sm text-gray-500 uppercase tracking-widest">
                  Authentic Masala
                </span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* RIGHT – ORDER PANEL */}
          <div className="bg-white rounded-3xl border shadow-xl p-10 sticky top-28">

            <h2 className="text-2xl font-bold text-gray-900">
              Place Your Order
            </h2>
            <p className="text-sm text-gray-600 mt-2 mb-8">
              Fast confirmation & personal assistance via WhatsApp
            </p>

            {/* PACK SIZE */}
            <div className="mb-6">
              <label className="block font-semibold text-gray-800 mb-2">
                Select Pack Size
              </label>
              <select
                value={packSize}
                onChange={(e) => setPackSize(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-red-700/20 focus:outline-none"
              >
                <option>50 gm</option>
                <option>100 gm</option>
                <option>200 gm</option>
                <option>500 gm</option>
              </select>
            </div>

            {/* QUANTITY */}
            <div className="mb-8">
              <label className="block font-semibold text-gray-800 mb-2">
                Quantity Required
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-red-700/20 focus:outline-none"
                />
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="rounded-xl border px-4 py-3"
                >
                  <option>kg</option>
                  <option>gm</option>
                </select>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-bold transition shadow-md"
            >
              Order on WhatsApp
            </button>

            <p className="mt-4 text-xs text-gray-500 text-center">
              You will be redirected to WhatsApp to complete your order
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
