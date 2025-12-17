export default function CTASection() {
  return (
    <section className="w-full bg-white rounded-[40px] flex flex-col justify-center items-center gap-6 sm:gap-8 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 text-center">
      {/* Icon */}
      <img
        src="/images/LOGO_MT-removebg-preview.png"
        alt="Logo"
        className="w-30 h-30 object-contain"
      />

      {/* Judul */}
      <h2 className="text-cyan-900 text-3xl sm:text-4xl md:text-5xl font-bold font-[Montserrat] leading-snug">
        Percayakan Proyek Anda pada Ahlinya
      </h2>

      {/* Deskripsi */}
      <p className="max-w-3xl text-black text-base sm:text-lg md:text-2xl font-normal font-[Montserrat] leading-relaxed mt-4">
        Melalui solusi konstruksi baja yang kuat dan efisien, kami membantu
        bisnis dan profesional mewujudkan pertumbuhan yang berkelanjutan.
      </p>

      {/* Tombol Aksi */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6 w-full sm:w-auto">
        <a
          href="https://wa.me/6281282345757"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-3 bg-cyan-900 text-white text-base font-bold font-[Montserrat] rounded-lg hover:bg-cyan-800 transition text-center"
        >
          Whatsapp
        </a>
        <button className="w-full sm:w-auto px-8 py-3 bg-white text-cyan-900 text-base font-bold font-[Montserrat] rounded-lg border-2 border-cyan-900 hover:bg-cyan-50 transition">
          Lihat Layanan Kami
        </button>
      </div>

    </section>
  );
}
