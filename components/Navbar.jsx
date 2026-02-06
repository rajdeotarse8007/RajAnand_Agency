"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

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

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  };

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT: LOGO + BRAND */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://kunshmasale.com/wp-content/uploads/2023/10/cropped-512-x-512.png"
            alt="Raj & Anand Masale Logo"
            width={70}
            height={70}
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
            priority
          />
          <span className="text-xl md:text-2xl font-bold text-red-600">
            Kunsh Masale
          </span>
        </Link>

        {/* CENTER: MAIN MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-red-600 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-red-600 transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-red-600 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-red-600 transition">
            Contact Us
          </Link>
          <Link href="/search" className="hover:text-red-600 transition">
            Search
          </Link>
        </div>

        {/* RIGHT: AUTH / ADMIN */}
        <div className="flex items-center gap-4">
          {!user && !isAdmin && (
            <>
              <Link
                href="/auth/sign-in"
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                Sign In
              </Link>

              <Link
                href="/auth/sign-up"
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Sign Up
              </Link>

              <Link
                href="/admin/login"
                className="border px-4 py-2 rounded-md font-medium hover:bg-gray-100"
              >
                Admin
              </Link>
            </>
          )}

          {user && (
            <>
              <span className="text-sm text-gray-600 hidden md:block">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          )}

          {isAdmin && (
            <>
              <Link
                href="/admin/dashboard"
                className="font-medium text-gray-800"
              >
                Admin Dashboard
              </Link>
              <button
                onClick={handleAdminLogout}
                className="bg-black text-white px-3 py-2 rounded"
              >
                Logout Admin
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
