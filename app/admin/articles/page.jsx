"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // === PAGINATION ===
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  const paginatedArticles = articles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    fetchArticles();
  }, []);

  // reset halaman kalau data berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [articles]);

  async function fetchArticles() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data.data || []);
    } catch (err) {
      console.error(err);
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
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Artikel Admin</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={() => router.push("/admin/articles/add")}
        className="mb-6 bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-800"
      >
        Tambah Artikel
      </button>

      {/* Header */}
      <div className="grid grid-cols-5 gap-4 font-semibold border-b py-3 bg-gray-100 px-2 text-sm">
        <span>Preview</span>
        <span>Title</span>
        <span>Content</span>
        <span>Created At</span>
        <span className="text-center">Action</span>
      </div>

      {/* Data */}
      {paginatedArticles.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-5 gap-4 py-3 items-center border-b text-sm hover:bg-gray-50 px-2"
        >
          <img
            src={item.image_url || "/no-image.png"}
            alt={item.title}
            className="w-32 h-24 object-cover rounded"
          />

          <div className="font-medium">{item.title}</div>

          <div className="truncate max-w-[300px] text-gray-700">
            {item.content}
          </div>

          <div>
            {new Date(item.created_at).toLocaleDateString("id-ID")}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => deleteArticles(item.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50 hover:bg-gray-300"
          >
            Prev
          </button>

          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50 hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
