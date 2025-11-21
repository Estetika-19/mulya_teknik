export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* Overlay biar teks kontras di atas gambar */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Konten utama */}
      <div className="relative z-10 text-center text-white">
       <div className="relative z-10 text-center text-white flex flex-col items-center justify-center gap-8 px-4">
          <h1
            className="text-8xl font-semibold font-[Montserrat] leading-[130px]"
            style={{
              textShadow: "4px 10px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <span className="text-orange-400">Solusi</span>
            <span className="text-stone-50"> </span>
            <span className="text-orange-400">Lengkap</span>
            <span className="text-stone-50">
              {" "}
              <br />
              Konstruksi dan Baja
            </span>
          </h1>

          {/* Tombol */}
          <div className="flex gap-6 mt-4">
            {/* Tombol 1: Pelajari Lebih Lanjut */}
            <button className="w-72 h-11 px-3.5 py-[5px] bg-cyan-900 rounded-lg flex justify-center items-center">
              <span className="text-white text-base font-bold font-[Montserrat] tracking-wide">
                Pelajari Lebih Lanjut
              </span>
            </button>

            {/* Tombol 2: WhatsApp */}
            <button className="w-72 h-11 px-3.5 py-[5px] bg-orange-400 rounded-lg flex justify-center items-center">
              <span className="text-white text-base font-bold font-[Montserrat] tracking-wide">
                WhatsApp
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
