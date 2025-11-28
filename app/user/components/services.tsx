import Link from "next/link";

export default function ProdukLayanan() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-28 bg-white flex flex-col justify-center items-center gap-6 sm:gap-10">
      <div className="text-center text-cyan-900 text-lg sm:text-xl font-normal font-[Montserrat]">
        Solusi Mulya Teknik
      </div>
      <h2 className="text-center text-cyan-900 text-3xl sm:text-4xl md:text-5xl font-bold font-[Montserrat]">
        Produk dan Layanan
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 w-full justify-items-center">
        {[ 
          { title: "Engineering", desc: "Arsitektur, analisis dan perhitungan RAB, serta manajemen proyek", img: "images/hands-engineer-working-blueprint-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus.jpg" },
          { title: "General Contractor", desc: "Civil, Electrical & Instrument, Structure, Mechanical", img: "images/IMG_5161 (1).jpg" },
          { title: "Maintenance Service", desc: "Perawatan berkala dan rutin", img: "images/1 (3).jpg" },
          { title: "Supplier dan Labor Supply", desc: "Pengadaan material konstruksi dan tenaga kerja siap pakai dan tersandarisasi", img: "images/EMT00983.jpg" }
        ].map((item, i) => (
          <div key={i} className="w-full sm:w-80 bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col">
            <img src={item.img} alt={item.title} className="w-full h-72 object-cover" />
            <div className="p-6 flex flex-col items-center gap-4">
              <h3 className="text-xl sm:text-2xl font-medium font-[Montserrat] text-black text-center leading-snug">
                {item.title}
              </h3>
              <p className="text-base sm:text-xl font-normal font-[Montserrat] text-black text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol */}
      <Link
        href="/user/service"
        className="mt-6 px-6 py-3 bg-cyan-900 rounded-lg text-white text-base font-bold font-[Montserrat] tracking-wide hover:bg-cyan-800 transition"
      >
        Lihat Lebih Banyak
      </Link>
    </section>
  );
}
