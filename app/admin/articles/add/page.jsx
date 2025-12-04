"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddArticles() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      const res = await fetch("/api/articles", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Gagal menyimpan artikel");

      const data = await res.json();
      router.push(`/user/articles/${data.id}`); // redirect ke detail
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-3 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Tambah Artikel</h1>

      {error && <p className="text-red-600">{error}</p>}
      {loading && <p>Menyimpan...</p>}

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        required
        className="border p-2"
      />
      <input
        className="border p-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-cyan-700 text-white rounded"
      >
        Simpan
      </button>
    </form>
  );
}
