"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPortfolio() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("product", product);
    formData.append("location", location);
    if (image) formData.append("image", image);

    const res = await fetch("/api/portofolio", { method: "POST", body: formData });
    if (res.ok) router.push("/admin/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="p-10">
      <h1 className="text-2xl font-bold mb-5">Tambah Portofolio</h1>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
      <input className="border p-2 w-full mb-3" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="border p-2 w-full mb-3" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <div className="mb-3">
        <p className="font-semibold">Product:</p>
        <label className="mr-4">
          <input type="radio" name="product" value="Canopy" onChange={e => setProduct(e.target.value)} /> Canopy
        </label>
        <label>
          <input type="radio" name="product" value="Railing" onChange={e => setProduct(e.target.value)} /> Railing
        </label>
      </div>
      <input className="border p-2 w-full mb-3"  placeholder="Location"  value={location}  onChange={(e) => setLocation(e.target.value)}
      />

      <button className="px-4 py-2 bg-cyan-700 text-white rounded">Simpan</button>
    </form>
  );
}
