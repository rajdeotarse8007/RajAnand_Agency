"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (adminId === "raj@123" && password === "Ranjana@123") {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid Admin Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
      <form
        onSubmit={handleAdminLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-2">
          Admin Panel
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Raj & Anand Masale
        </p>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Admin ID"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setAdminId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
          Login as Admin
        </button>
      </form>
    </div>
  );
}
