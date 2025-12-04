"use client";

import { useEffect, useState } from "react";

export default function PortofolioDetailClient({ id }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/portofolio/${id}`);
        if (!res.ok) throw new Error("Portofolio tidak ditemukan");
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <img src={data.image_path} alt={data.title} className="w-full max-w-xl mb-4" />
      <p className="text-gray-700">{data.description}</p>
    </div>
  );
}
