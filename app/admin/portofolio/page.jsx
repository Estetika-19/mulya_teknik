"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { fetchPortfolios(); }, []);

  async function fetchPortfolios() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/portofolio");
      const data = await res.json();
      setPortfolios(data.data || []);
    } catch (err) {
      setError("Gagal mengambil data portofolio.");
    } finally {
      setLoading(false);
    }
  }

  async function deletePortfolio(id) {
    if (!confirm("Yakin ingin menghapus portofolio ini?")) return;
    await fetch(`/api/portofolio/${id}`, { method: "DELETE" });
    fetchPortfolios();
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Portofolio Admin</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={() => router.push("/admin/portofolio/add")}
        className="mb-4 bg-cyan-700 text-white px-4 py-2 rounded"
      >
        Tambah Portofolio
      </button>

      {/* Header */}
      <div className="grid grid-cols-7 gap-4 font-semibold border-b py-2">
        <span>Preview</span>
        <span>Title</span>
        <span>Description</span>
        <span>Product</span>
        <span>Location</span>
        <span>Created At</span>
        <span>Action</span>
      </div>

      {portfolios.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-7 gap-4 py-2 items-center border-b"
        >
          <img
            src={item.image_path || "/no-image.png"}
            className="w-32 h-24 object-cover rounded"
          />
          <div>{item.title}</div>
          <div className="truncate">{item.description}</div>
          <div>{item.product}</div>
          <div>{item.location}</div>
          <div>{new Date(item.created_at).toLocaleDateString()}</div>

          <div className="flex gap-2">
            <button
              onClick={() => router.push(`/admin/portofolio/${item.id}`)}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => deletePortfolio(item.id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
