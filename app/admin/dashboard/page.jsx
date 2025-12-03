"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function AdminDashboard() {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState([]);
  const [articles, setArticles] = useState([]);
  const [activeTab, setActiveTab] = useState("portfolio");

  useEffect(() => {
    async function checkSession() {
      const res = await fetch("/api/admin/check", { cache: "no-store", credentials: "include" });
      const data = await res.json();
      if (!data.auth) router.push("/admin/login");
    }
    checkSession();
    fetchPortfolios();
    fetchArticles();
  }, []);

  async function fetchPortfolios() {
    const res = await fetch("/api/portofolio");
    const data = await res.json();
    setPortfolios(data.data || []);
  }

  async function fetchArticles() {
    const res = await fetch("/api/articles");
    const data = await res.json();
    setArticles(data.data || []);
  }

  async function deletePortfolio(id) {
    if (!confirm("Yakin ingin menghapus portofolio ini?")) return;
    await fetch(`/api/portofolio/${id}`, { method: "DELETE" });
    fetchPortfolios();
  }

  async function deleteArticle(id) {
    if (!confirm("Yakin ingin menghapus artikel ini?")) return;
    await fetch(`/api/articles/${id}`, { method: "DELETE" });
    fetchArticles();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="w-full min-h-screen bg-white px-8 py-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-cyan-900">Welcome Admin</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>

      {/* Tab */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("portfolio")}
          className={activeTab === "portfolio" ? "font-bold underline" : ""}
        >
          Portofolio
        </button>
        <button
          onClick={() => setActiveTab("articles")}
          className={activeTab === "articles" ? "font-bold underline" : ""}
        >
          Articles
        </button>
      </div>

      {/* Portofolio */}
      {activeTab === "portfolio" && (
        <div className="w-full bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between mb-2">
            <h2 className="text-xl font-medium">Portofolio</h2>
            <Link href="/admin/portofolio/add">
              <button className="bg-cyan-700 text-white px-3 py-1 rounded">
                Tambah Portofolio
              </button>
            </Link>
          </div>
          <div className="w-full bg-blue-200 flex p-2 font-semibold text-cyan-900">
            <div className="w-1/4">Preview</div>
            <div className="w-1/4">Title</div>
            <div className="w-1/4">Description</div>
            <div className="w-1/4">Created at</div>
            <div className="w-1/4">Action</div>
          </div>
          {portfolios.map((p) => (
            <div key={p.id} className="w-full flex items-center p-2 border-b">
              <div className="w-1/10 h-20">
                <img 
                  src={p.image_path} 
                  alt={p.title} 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="w-1/4 text-center">{p.title}</div>
              <div className="w-1/4">{p.description}</div>
              <div className="w-1/4">{p.created_at}</div>
              <div className="w-1/4 flex gap-2">
                <button className="bg-cyan-900 text-white px-2 py-1 rounded">Edit</button>
                <button onClick={() => deletePortfolio(p.id)} className="bg-pink-800 text-white px-2 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Articles */}
      {activeTab === "articles" && (
        <div className="w-full bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between mb-2">
            <h2 className="text-xl font-medium">Articles</h2>
            <Link href="/admin/articles/add">
              <button className="bg-cyan-700 text-white px-3 py-1 rounded">
                Tambah Artikel
              </button>
            </Link>
          </div>
          <div className="w-full bg-blue-200 flex p-2 font-semibold text-cyan-900">
            <div className="w-1/4 text-center">Title</div>
            <div className="w-1/4 text-center">Content</div>
            <div className="w-1/4 text-center">Created at</div>
            <div className="w-1/4">Action</div>
          </div>
          {articles.map((a) => (
            <div key={a.id} className="w-full flex items-center p-2 border-b">
              <div className="w-1/10 h-20">
                <img 
                  src={a.image_path} 
                  alt={a.title} 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="w-1/4 text-center">{a.title}</div>
              <div className="w-1/4 truncate text-center" title={a.content}>
                {a.content}
              </div>
              <div className="w-1/4 text-center">{a.created_at}</div>
              <div className="w-1/4 flex gap-2">
                <button className="bg-cyan-900 text-white px-2 py-1 rounded">Edit</button>
                <button onClick={() => deleteArticle(a.id)} className="bg-pink-800 text-white px-2 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
