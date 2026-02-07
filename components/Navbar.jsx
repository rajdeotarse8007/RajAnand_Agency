"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    setIsAdmin(localStorage.getItem("isAdmin") === "true");

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const { data } = await supabase
      .from("products")
      .select("id")
      .ilike("name", `%${query}%`)
      .limit(1)
      .single();

    if (data?.id) {
      router.push(`/products/${data.id}`);
      setQuery("");
    } else {
      alert("Product not found");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-red-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative rounded-full p-2 transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(193,10,10,0.35)]">
            <Image
              src="https://kunshmasale.com/wp-content/uploads/2023/10/cropped-512-x-512.png"
              alt="Kunsh Masale"
              width={80}
              height={80}
              className="w-14 h-14 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 uppercase">
              Kunsh
              <span className="text-red-700">Masale</span>
            </span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.25em] text-gray-500 font-semibold">
              Purely Authentic
            </span>
          </div>
        </Link>

        {/* CENTER: MENU + SEARCH */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 text-sm font-semibold tracking-wide text-gray-700 uppercase">
            <Link href="/" className="hover:text-red-700 transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-red-700 transition-colors">
              Products
            </Link>
            <Link href="/about" className="hover:text-red-700 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-red-700 transition-colors">
              Contact
            </Link>
          </div>

          {/* SEARCH BAR */}
          <form onSubmit={handleSearch} className="relative group">
            <input
              type="text"
              placeholder="Search spices..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-56 px-5 py-2.5 pl-11 bg-gray-50 border border-gray-200 rounded-full text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 focus:w-80"
            />
            <svg
              className="absolute left-4 top-3 w-4 h-4 text-gray-400 group-focus-within:text-red-700 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>
        </div>

        {/* RIGHT (reserved for auth/cart later) */}
        <div className="flex items-center gap-4"></div>
      </div>
    </nav>
  );
}
