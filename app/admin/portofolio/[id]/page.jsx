"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";

export default function EditPortfolio(props) {
  const params = use(props.params);
  const router = useRouter();
  const { id } = params;

  const [form, setForm] = useState({
    title: "",
    description: "",
    product: "",
    location: "",
    image: ""
  });

  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    fetch(`/api/portofolio/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          title: data.title || "",
          description: data.description || "",
          product: data.product || "",
          location: data.location || "",
          image: data.image || ""
        });
      });
  }, [id]);

  const updateData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("product", form.product);
    formData.append("location", form.location);

    if (newImage) formData.append("image", newImage);
    else formData.append("current_image", form.image);

    const res = await fetch(`/api/portofolio/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) router.push("/admin/dashboard");
  };

  const deleteData = async () => {
    await fetch(`/api/portofolio/${id}`, { method: "DELETE" });
    router.push("/admin/dashboard");
  };

  return (
    <form onSubmit={updateData} className="p-10">
      <h1 className="text-2xl font-bold mb-5">Edit Portofolio</h1>

      <input
        className="border p-2 w-full mb-3"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        className="border p-2 w-full mb-3"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <h3 className="font-semibold mt-4">Product</h3>
      <div className="flex gap-4 mb-3">
        <label>
          <input
            type="radio"
            name="product"
            value="Canopy"
            checked={form.product === "Canopy"}
            onChange={(e) => setForm({ ...form, product: e.target.value })}
          />
          Canopy
        </label>

        <label>
          <input
            type="radio"
            name="product"
            value="Railing"
            checked={form.product === "Railing"}
            onChange={(e) => setForm({ ...form, product: e.target.value })}
          />
          Railing
        </label>
      </div>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
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
