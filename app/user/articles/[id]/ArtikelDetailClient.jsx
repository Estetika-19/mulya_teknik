"use client";

import { useEffect, useState } from "react";

export default function ArticleDetailClient({ id }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        const res = await fetch(`/api/articles/${id}`);
        if (!res.ok) throw new Error("Artikel tidak ditemukan");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-600 text-center mt-10">{error}</p>;

  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">{data.title}</h1>

      <img
        src={data.image_path}
        alt={data.title}
        className="w-full max-w-4xl h-auto rounded-lg mb-6 shadow-lg"
      />

      <p className="text-gray-700 text-lg max-w-3xl text-center">{data.content}</p>
    </div>
  );
}
