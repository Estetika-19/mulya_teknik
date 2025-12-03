"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => { fetchArticles(); }, []);

  async function fetchArticles() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data.data || []);
    } catch (err) {
      setError("Gagal mengambil data artikel.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteArticles(id) {
    if (!confirm("Yakin ingin menghapus artikel ini?")) return;
    await fetch(`/api/articles/${id}`, { method: "DELETE" });
    fetchArticles();
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Artikel Admin</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <button onClick={() => router.push("/admin/articles/add")} className="mb-4 bg-cyan-700 text-white px-4 py-2 rounded">
        Tambah Artikel
      </button>

      <div className="grid grid-cols-5 gap-4 font-semibold border-b py-2">
        <span>Preview</span>
        <span>Title</span>
        <span>Content</span>
        <span>Created At</span>
        <span>Action</span>
      </div>

      {articles.map(item => (
        <div key={item.id} className="grid grid-cols-5 py-2 items-center border-b">
          <img src={item.image_url || "/no-image.png"} className="w-32 h-24 object-cover rounded" />
          <div>{item.title}</div>
          <div className="truncate">{item.content}</div>
          <div>{new Date(item.created_at).toLocaleDateString()}</div>
          <div className="flex gap-2">
            <button onClick={() => router.push(`/admin/articles/${item.id}`)} className="bg-green-600 text-white px-3 py-1 rounded">Edit</button>
            <button onClick={() => deleteArticles(item.id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
