export default function CTASection() {
  return (
    <section className="w-full bg-white rounded-[40px] flex flex-col justify-center items-center gap-8 py-24 px-6 text-center">
      {/* Icon */}
      <img
        src="https://placehold.co/114x114"
        alt="Icon"
        className="w-28 h-28"
      />

      {/* Judul */}
      <h2 className="text-cyan-900 text-5xl font-bold font-[Montserrat] leading-snug">
        Percayakan Proyek Anda pada Ahlinya
      </h2>

      {/* Deskripsi */}
      <p className="max-w-3xl text-black text-2xl font-normal font-[Montserrat] leading-relaxed">
        Melalui solusi konstruksi baja yang kuat dan efisien, kami membantu
        bisnis dan profesional mewujudkan pertumbuhan yang berkelanjutan.
      </p>

      {/* Tombol Aksi */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
        <button className="px-8 py-3 bg-cyan-900 text-white text-base font-bold font-[Montserrat] rounded-lg hover:bg-cyan-800 transition">
          Whatsapp
        </button>
        <button className="px-8 py-3 bg-white text-cyan-900 text-base font-bold font-[Montserrat] rounded-lg border-2 border-cyan-900 hover:bg-cyan-50 transition">
          Lihat Layanan Kami
        </button>
      </div>
    </section>
  );
}
