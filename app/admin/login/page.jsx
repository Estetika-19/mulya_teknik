"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  async function handleLogin() {
  const res = await fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (!data.success) {
    setErrorMsg(data.error);
    return;
  }

  router.push("/admin/dashboard");
}

  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-center">
      <div className="w-[722px] h-[720px] bg-white rounded-2xl flex flex-col justify-center items-center gap-11 p-6 shadow">
        
        <img className="w-64 h-48 object-contain" src="https://placehold.co/249x192" />

        {/* Username */}
        <div className="w-[526px] h-16 p-2.5 bg-white rounded-xl outline outline-[3px] outline-offset-[-3px] outline-cyan-900 flex items-center gap-3">
          <input
            type="text"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full text-xl font-montserrat outline-none bg-transparent"
          />
        </div>

        {/* Password */}
        <div className="w-[526px] h-16 p-2.5 bg-white rounded-xl outline outline-[3px] outline-offset-[-3px] outline-cyan-900 flex items-center gap-3">
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-xl font-montserrat outline-none bg-transparent"
          />
        </div>

        {errorMsg && (
          <p className="text-red-600 font-montserrat">{errorMsg}</p>
        )}

        <button
          className="w-48 h-11 bg-cyan-900 rounded-lg flex justify-center items-center"
          onClick={handleLogin}
        >
          <span className="text-white text-base font-bold font-montserrat tracking-wide">
            LOGIN
          </span>
        </button>
      </div>
    </div>
  );
}
