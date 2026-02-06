"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/auth/sign-in");
      } else {
        setUser(data.user);
      }
    };
    getUser();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Welcome, {user?.email}
      </p>
    </div>
  );
}
