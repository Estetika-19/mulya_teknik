"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditArticles({ params }) {
  const router = useRouter();
  const { id } = params;

  const [form, setForm] = useState({
    title: "",
    content: "",
    image: ""
  });

  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    fetch(`/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          title: data.title || "",
          content: data.content || "",
          image: data.image || ""
        });
      });
  }, [id]);

  const updateData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.content);

    if (newImage) formData.append("image", newImage);
    else formData.append("current_image", form.image);

    const res = await fetch(`/api/articles/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) router.push("/admin/dashboard");
  };

  const deleteData = async () => {
    await fetch(`/api/articles/${id}`, { method: "DELETE" });
    router.push("/admin/dashboard");
  };

  return (
    <form onSubmit={updateData} className="p-10">
      <h1 className="text-2xl font-bold mb-5">Edit articles</h1>

      <input
        className="border p-2 w-full mb-3"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        className="border p-2 w-full mb-3"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <p>Gambar sekarang:</p>
      {form.image && <img src={form.image} width="160" className="mb-3" />}

      <input
        type="file"
        onChange={(e) => setNewImage(e.target.files[0])}
        className="border mb-3"
      />

      <button className="px-4 py-2 bg-green-600 text-white rounded">
        Update
      </button>

      <button
        type="button"
        className="px-4 py-2 bg-red-600 text-white rounded ml-3"
        onClick={deleteData}
      >
        Delete
      </button>
    </form>
  );
}
