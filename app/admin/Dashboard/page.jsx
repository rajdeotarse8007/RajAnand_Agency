"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/admin/login");
    }
  }, []);

  const logoutAdmin = () => {
    localStorage.removeItem("isAdmin");
    router.push("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Admin Dashboard
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome Admin 👋
      </p>

      <button
        onClick={logoutAdmin}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout Admin
      </button>
    </div>
  );
}
