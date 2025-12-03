"use client";

import Link from "next/link";

export default function PortofolioSection({ items = [] }) {
  const latestItems = items.slice(0, 4);

  return (
    <section className="w-full bg-cyan-900 py-20 px-4 sm:px-8 lg:px-16 text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold italic font-[Montserrat] mb-3">
        Proyek-Proyek Terbaru Kami
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {latestItems.length === 0 ? (
          <p className="text-zinc-300">Tidak ada data portofolio.</p>
        ) : (
          latestItems.map((item) => (
            <div
              key={item.id}
              className="w-full h-64 sm:h-96 bg-zinc-500 rounded-lg overflow-hidden"
            >
              <img
                src={item.image_path}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))
        )}
      </div>

    <div className="flex justify-center mt-10">
      <Link href="/user/portofolio">
        <button className="w-full sm:w-64 h-11 bg-cyan-900 border border-white text-white text-base font-bold font-[Montserrat] tracking-wide rounded-lg transition">
          Lihat Lebih Banyak
        </button>
      </Link>
    </div>
    </section>
  );
}
