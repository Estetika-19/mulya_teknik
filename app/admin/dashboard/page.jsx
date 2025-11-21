"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState([]);
  const [articles, setArticles] = useState([]);

  // ============ FETCH DATA ============
  useEffect(() => {
    fetchPortfolios();
    fetchArticles();
  }, []);

  async function fetchPortfolios() {
    try {
      const res = await fetch("/api/portofolio");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setPortfolios(data.data || []);
    } catch (err) {
      console.error("Failed to fetch portfolios:", err);
    }
  }

  async function fetchArticles() {
    try {
      const res = await fetch("/api/articles");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setArticles(data.data || []);
    } catch (err) {
      console.error("Failed to fetch articles:", err);
    }
  }

  // ============ DELETE ============
  async function deletePortfolio(id) {
    if (!confirm("Yakin ingin menghapus portofolio ini?")) return;
    try {
      const res = await fetch(`/api/portofolio/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Failed to delete portfolio: ${res.status}`);
      fetchPortfolios();
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteArticle(id) {
    if (!confirm("Yakin ingin menghapus artikel ini?")) return;
    try {
      const res = await fetch(`/api/articles/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Failed to delete article: ${res.status}`);
      fetchArticles();
    } catch (err) {
      console.error(err);
    }
  }

  // ============ LOGOUT ============
  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen w-full bg-white p-6 relative">
      {/* Logout Button */}
      <div className="absolute top-6 right-10">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow"
        >
          Logout
        </button>
      </div>

      <h1 className="text-3xl font-bold text-cyan-900 mb-10 text-center">
        Welcome Admin
      </h1>

      {/* ============ PORTFOLIO SECTION ============ */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">Portofolio</h2>
          <button
            onClick={() => router.push("/admin/portofolio/add")}
            className="px-4 py-2 bg-cyan-700 text-white text-sm font-bold rounded-lg"
          >
            Tambah Portofolio
          </button>
        </div>

        {/* Header Row */}
        <div className="grid grid-cols-7 bg-blue-100 py-2 px-2 font-semibold text-cyan-900 border">
          <span>Preview</span>
          <span>Title</span>
          <span>Description</span>
          <span>Product</span>
          <span>Location</span>
          <span>Created At</span>
          <span>Action</span>
        </div>

        {/* Data Rows */}
        {portfolios.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-7 py-2 px-2 items-center border-b gap-5"
          >
            {/* Preview */}
            <img
              src={item.image_path || "/no-image.png"}
              className="w-32 h-24 object-cover rounded shadow"
            />

            {/* Title */}
            <div className="text-gray-800 font-medium">{item.title}</div>

            {/* Description */}
            <div className="text-gray-800 truncate max-w-xs">{item.description}</div>

            {/* Product */}
            <div className="text-gray-800">{item.product}</div>

            {/* Location */}
            <div className="text-gray-800">{item.location}</div>

            {/* Created At */}
            <div className="text-gray-700">
              {new Date(item.created_at).toLocaleDateString()}
            </div>

            {/* Action */}
            <div className="flex gap-2">
              <button
                onClick={() => router.push(`/admin/portofolio/${item.id}`)}
                className="px-3 py-1 bg-cyan-900 text-white text-xs font-bold rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deletePortfolio(item.id)}
                className="px-3 py-1 bg-pink-800 text-white text-xs font-bold rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ============ ARTICLES SECTION ============ */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">Artikel</h2>
          <button
            onClick={() => router.push("/admin/articles/add")}
            className="px-4 py-2 bg-cyan-700 text-white text-sm font-bold rounded-lg"
          >
            Tambah Artikel
          </button>
        </div>

        <div className="grid grid-cols-5 bg-blue-100 py-2 px-4 font-medium text-cyan-900">
          <span>Image</span>
          <span>Content</span>
          <span>Title</span>
          <span>Created At</span>
          <span>Action</span>
        </div>

        {articles.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-5 py-4 px-4 items-center border-b"
          >
            <img
              src={item.image_path || "/no-image.png"}
              className="w-28 h-24 object-cover rounded"
            />
            <div className="text-gray-800 truncate">{item.content}</div>
            <div className="text-gray-800">{item.title}</div>
            <div className="text-gray-700">
              {new Date(item.created_at).toLocaleDateString()}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => router.push(`/admin/articles/${item.id}`)}
                className="px-3 py-1 bg-cyan-900 text-white text-xs font-bold rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteArticle(item.id)}
                className="px-3 py-1 bg-pink-800 text-white text-xs font-bold rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
