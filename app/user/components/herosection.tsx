export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="w-full relative z-10 max-w-[900px] mx-auto">

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

        {/* Sub-Heading baru */}
        <p className="text-stone-200 text-base sm:text-lg md:text-xl font-[Montserrat] mt-6 leading-relaxed max-w-2xl"
           style={{ textShadow: "2px 3px 4px rgba(0,0,0,0.25)" }}>
          Dari perencanaan hingga pemasangan, kami hadir sebagai mitra terbaik
          untuk kebutuhan konstruksi Anda.
        </p>

      </div>
    </section>
  );
}
