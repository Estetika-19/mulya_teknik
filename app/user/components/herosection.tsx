export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center gap-6 sm:gap-8">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold font-[Montserrat] leading-snug sm:leading-tight md:leading-[1.1]"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <span className="text-orange-400">Solusi</span>{" "}
          <span className="text-stone-50">Lengkap</span>
          <br />
          <span className="text-orange-400">Konstruksi dan Baja</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <button className="w-full sm:w-64 h-11 bg-cyan-900 rounded-lg flex justify-center items-center">
            <span className="text-white text-base font-bold font-[Montserrat] tracking-wide">
              Pelajari Lebih Lanjut
            </span>
          </button>
          <button className="w-full sm:w-64 h-11 bg-orange-400 rounded-lg flex justify-center items-center">
            <span className="text-white text-base font-bold font-[Montserrat] tracking-wide">
              WhatsApp
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
