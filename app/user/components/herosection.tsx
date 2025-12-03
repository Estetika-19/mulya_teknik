export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="w-full relative z-10 ... max-w-[900px] mx-auto">

        
        {/* Heading */}
        <h1
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold font-[Montserrat]
                     leading-snug sm:leading-tight md:leading-[1.1]"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <span className="text-stone-50">Solusi</span>{" "}
          <span className="text-stone-50">Lengkap</span>
          <br />
          <span className="text-stone-50">Konstruksi dan Baja</span>
        </h1>

        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <button className="w-full sm:w-64 h-11 bg-cyan-900 rounded-lg flex justify-center items-center hover:bg-cyan-800 transition">
            <span className="text-white text-base font-bold font-[Montserrat] tracking-wide">
              Pelajari Lebih Lanjut
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}
