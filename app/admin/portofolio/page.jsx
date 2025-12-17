"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // === PAGINATION STATE ===
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(portfolios.length / ITEMS_PER_PAGE);

  const paginatedPortfolios = portfolios.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // === CHECK SESSION + FETCH DATA ===
  useEffect(() => {
    async function checkSessionAndFetch() {
      try {
        const res = await fetch("/api/admin/check", {
          cache: "no-store",
          credentials: "include",
        });

        const data = await res.json();
        if (!data.auth) {
          router.push("/admin/login");
          return;
        }

        fetchPortfolios();
      } catch (err) {
        console.error(err);
        router.push("/admin/login");
      }
    }

    checkSessionAndFetch();
  }, []);

  // === RESET PAGE SAAT DATA BERUBAH ===
  useEffect(() => {
    setCurrentPage(1);
  }, [portfolios]);

  async function fetchPortfolios() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/portofolio");
      const data = await res.json();
      setPortfolios(data.data || []);
    } catch (err) {
      console.error(err);
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
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Portofolio Admin</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={() => router.push("/admin/portofolio/add")}
        className="mb-6 bg-cyan-700 text-white px-5 py-2 rounded-lg hover:bg-cyan-800"
      >
        Tambah Portofolio
      </button>

      {/* Table Wrapper */}
      <div className="w-full overflow-x-auto bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="grid grid-cols-7 gap-4 font-semibold border-b p-4 bg-gray-100 text-gray-700 text-sm">
          <span>Preview</span>
          <span>Title</span>
          <span>Description</span>
          <span>Product</span>
          <span>Location</span>
          <span>Created At</span>
          <span className="text-center">Action</span>
        </div>

        {paginatedPortfolios.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-7 gap-4 p-4 items-center border-b text-sm hover:bg-gray-50 transition"
          >
            <img
              src={item.image_path || "/no-image.png"}
              alt={item.title}
              className="w-28 h-20 object-cover rounded-md shadow-sm"
            />

            <div className="font-medium text-gray-900">{item.title}</div>

            <div className="truncate max-w-[200px] text-gray-700">
              {item.description}
            </div>

            <div className="text-gray-700">{item.product}</div>

            <div className="text-gray-700">{item.location}</div>

            <div className="text-gray-700">
              {new Date(item.created_at).toLocaleDateString("id-ID")}
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => deletePortfolio(item.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

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

          <span className="text-sm text-gray-700">
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
