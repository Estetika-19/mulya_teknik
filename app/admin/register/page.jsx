"use client";
import { useState } from "react";

export default function AdminRegisterPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // ⬅️ PENTING BANGET, TANPA INI GAGAL

    const res = await fetch("/api/admin/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setMessage(data.message || data.error);
  };

  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[722px] h-[720px] bg-white rounded-2xl flex flex-col justify-center items-center gap-11 p-6 shadow"
      >
        <h1 className="text-3xl font-bold">Register Admin</h1>

        {/* Username */}
        <div className="w-[526px] h-16 p-2.5 bg-white rounded-xl outline outline-[3px] outline-offset-[-3px] outline-cyan-900 flex items-center gap-3">
          <input
            type="text"
            placeholder="USERNAME"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full text-xl font-montserrat outline-none bg-transparent"
          />
        </div>

        {/* Password */}
        <div className="w-[526px] h-16 p-2.5 bg-white rounded-xl outline outline-[3px] outline-offset-[-3px] outline-cyan-900 flex items-center gap-3">
          <input
            type="password"
            placeholder="PASSWORD"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full text-xl font-montserrat outline-none bg-transparent"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-48 h-11 bg-cyan-900 rounded-lg flex justify-center items-center"
        >
          <span className="text-white text-base font-bold font-montserrat tracking-wide">
            REGISTER
          </span>
        </button>

        {message && <p className="text-lg mt-4">{message}</p>}
      </form>
    </div>
  );
}
