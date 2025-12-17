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

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-600 text-center mt-20">{error}</p>;
  if (!data) return <p className="text-center mt-20">Artikel tidak ditemukan</p>;

  return (
    <div className="pt-[120px] pb-[80px] px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-center">
      {/* Judul */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center">
        {data.title}
      </h1>

      {/* Gambar */}
      {data.image_path && (
        <img
          src={data.image_path}
          alt={data.title}
          className="w-full max-w-md sm:max-w-lg md:max-w-4xl h-auto rounded-lg mb-8 shadow-lg"
        />
      )}

      {/* Konten */}
      <div className="max-w-md sm:max-w-lg md:max-w-3xl text-gray-700">
        {data.content
          .split("\n\n")
          .map((paragraph, i) => (
            <p
              key={i}
              className="mb-4 text-justify leading-relaxed text-base sm:text-lg"
            >
              {paragraph.split("\n").map((line, j) => (
                <span key={j}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          ))}
      </div>

    </div>
  );
}
