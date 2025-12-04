"use client";
import { useEffect, useState } from "react";

export default function PortofolioPage() {
  const [items, setItems] = useState([]);
  const [filterProduct, setFilterProduct] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/portofolio`, {
          cache: "no-store",
        });

        const json = await res.json();
        const data = Array.isArray(json) ? json : json.data ?? [];

        setItems(data);
      } catch (err) {
        console.error("Failed to fetch portofolio", err);
      }
    };

    load();
  }, []);

  const filteredItems = items.filter((item) =>
    filterProduct ? item.product === filterProduct : true
  );

  return (
    <div className="w-full bg-white flex flex-col items-start gap-20 overflow-hidden">
      
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <img src="https://placehold.co/102x102" alt="Logo" width={80} height={80} />
        <nav className="flex gap-10 text-cyan-900 text-lg font-bold font-[Montserrat]">
          <a href="/" className="hover:text-cyan-600">Beranda</a>
          <a href="/about" className="hover:text-cyan-600">Tentang Kami</a>
          <a href="/produk" className="hover:text-cyan-600">Produk & Layanan</a>
          <a href="/portofolio" className="hover:text-cyan-600">Portofolio</a>
        </nav>
      </header>

      {/* Judul */}
      <section className="px-12">
        <h1 className="text-3xl font-bold font-[Montserrat] text-black mb-6">
          Portofolio Proyek Terbaru
        </h1>

        {/* Filter */}
        <div className="flex gap-6 mb-8">
          <select
            className="px-4 py-2 bg-gray-100 rounded-md text-gray-600"
            value={filterProduct}
            onChange={(e) => setFilterProduct(e.target.value)}
          >
            <option value="">Semua Produk</option>
            {[...new Set(items.map((i) => i.product))].map((prod) => (
              <option key={prod} value={prod}>{prod}</option>
            ))}
          </select>

          <button
            className="text-gray-500 hover:underline"
            onClick={() => setFilterProduct("")}
          >
            Hapus Filter
          </button>
        </div>

        {/* Grid Portofolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={`/user/portofolio/${item.id}`}
              className="rounded-2xl overflow-hidden shadow-md bg-gray-100 cursor-pointer"
            >
              <img
                src={item.image_path}
                alt={item.title}
                className="h-64 w-full object-cover bg-gray-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold font-[Montserrat] text-black">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-[Inter] text-sm mt-2 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
