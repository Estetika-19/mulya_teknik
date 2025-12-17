"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPortfolio() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Hitung jumlah kata
  const countWords = (str) => {
    return str.trim().split(/\s+/).filter(Boolean).length;
  };

  // Session check
  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch("/api/admin/check", { cache: "no-store", credentials: "include" });
        const data = await res.json();
        if (!data.auth) router.push("/admin/login");
      } catch (err) {
        console.error(err);
        router.push("/admin/login");
      }
    }
    checkSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // VALIDASI 100 KATA
    if (countWords(description) > 100) {
      setError("Description maksimal 100 kata!");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("product", product);
      formData.append("location", location);
      if (image) formData.append("image", image);

      const res = await fetch("/api/portofolio", { method: "POST", body: formData, credentials: "include" });
      if (!res.ok) throw new Error("Gagal menyimpan portofolio");

      router.push("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-10">
      <h1 className="text-2xl font-bold mb-5">Tambah Portofolio</h1>

      {error && <p className="text-red-600 mb-3">{error}</p>}
      {loading && <p className="mb-3">Menyimpan...</p>}

      <input type="file" onChange={(e) => setImage(e.target.files[0])} required className="border p-2 w-full mb-3" />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-1"
        placeholder="Description (maks 100 kata)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Info jumlah kata */}
      <p className={`text-sm mb-3 ${countWords(description) > 100 ? "text-red-600" : "text-gray-600"}`}>
        {countWords(description)} / 100 kata
      </p>

      <div className="mb-3">
        <p className="font-semibold">Product:</p>
        {["Baja Ringan","Baja IWF","Railing","Kusen","Pagar","Balkon","Plafond","ACP"].map((p) => (
          <label key={p} className="mr-4">
            <input type="radio" name="product" value={p} onChange={e => setProduct(e.target.value)} /> {p}
          </label>
        ))}
      </div>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button className="px-4 py-2 bg-cyan-700 text-white rounded">
        Simpan
      </button>
    </form>
  );
}
