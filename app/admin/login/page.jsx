"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  async function handleLogin() {
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // penting supaya cookie tersimpan
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (!data.success) {
        setErrorMsg(data.error || "Login failed");
        return;
      }

      // Redirect ke dashboard
      router.push("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setErrorMsg("Server error, try again");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-[500px] p-6 shadow rounded-xl flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Admin Login</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full"
        />

        {errorMsg && <p className="text-red-600">{errorMsg}</p>}

        <button
          onClick={handleLogin}
          className="bg-cyan-900 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
