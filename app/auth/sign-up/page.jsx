"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    alert("Account created! Please check your email.");
    router.push("/auth/sign-in");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 to-red-200">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-2">
          Raj & Anand Masale
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Create your account
        </p>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          disabled={loading}
          className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?
          <a href="/auth/sign-in" className="text-red-600 font-semibold ml-1">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
}
