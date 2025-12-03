"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddArticles() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    const res = await fetch("${process.env.URL}/api/articles", { method: "POST", body: formData });
    if (res.ok) router.push("/admin/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="p-10">
      <h1 className="text-2xl font-bold mb-5">Tambah articles</h1>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
      <input className="border p-2 w-full mb-3" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="border p-2 w-full mb-3" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button className="px-4 py-2 bg-cyan-700 text-white rounded">Simpan</button>
    </form>
  );
}
