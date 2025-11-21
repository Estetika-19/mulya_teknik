import Link from "next/link";

export default function ProdukLayanan() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-8 py-28 bg-white flex flex-col justify-center items-center gap-10">
      <div className="text-center text-cyan-900 text-2xl font-normal font-[Montserrat]">
        Solusi Mulya Teknik
      </div>
      <h2 className="text-center text-cyan-900 text-5xl font-bold font-[Montserrat]">
        Produk dan Layanan
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center items-start gap-6">
        {/* Card 1 */}
        <div className="w-80 bg-white rounded-3xl overflow-hidden shadow-sm">
          <img
            src="https://placehold.co/628x306"
            alt="Engineering"
            className="w-full h-72 object-cover"
          />
          <div className="p-6 flex flex-col items-center gap-4">
            <h3 className="text-2xl font-medium font-[Montserrat] text-black text-center">
              Engineering
            </h3>
            <p className="text-xl font-normal font-[Montserrat] text-black text-center">
              Arsitektur, analisis dan perhitungan RAB, serta manajemen proyek
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-80 bg-white rounded-3xl overflow-hidden shadow-sm">
          <img
            src="https://placehold.co/628x306"
            alt="General Contractor"
            className="w-full h-72 object-cover"
          />
          <div className="p-6 flex flex-col items-center gap-4">
            <h3 className="text-2xl font-medium font-[Montserrat] text-black text-center">
              General Contractor
            </h3>
            <p className="text-xl font-normal font-[Montserrat] text-black text-center">
              Civil, Electrical & Instrument, Structure, Mechanical
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-80 bg-white rounded-3xl overflow-hidden shadow-sm">
          <img
            src="https://placehold.co/628x306"
            alt="Maintenance Service"
            className="w-full h-72 object-cover"
          />
          <div className="p-6 flex flex-col items-center gap-4">
            <h3 className="text-2xl font-medium font-[Montserrat] text-black text-center leading-snug">
              Maintenance <br /> Service
            </h3>
            <p className="text-xl font-normal font-[Montserrat] text-black text-center">
              Perawatan berkala dan rutin
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-80 bg-white rounded-3xl overflow-hidden shadow-sm">
          <img
            src="https://placehold.co/628x306"
            alt="Supplier dan Labor Supply"
            className="w-full h-72 object-cover"
          />
          <div className="p-6 flex flex-col items-center gap-4">
            <h3 className="text-2xl font-medium font-[Montserrat] text-black text-center leading-snug">
              Supplier dan <br /> Labor Supply
            </h3>
            <p className="text-xl font-normal font-[Montserrat] text-black text-center">
              Pengadaan material konstruksi dan tenaga kerja siap pakai dan
              tersandarisasi
            </p>
          </div>
        </div>
      </div>

      {/* Tombol */}
      <Link
        href="/about"
        className="px-6 py-3 bg-cyan-900 rounded-lg text-white text-base font-bold font-[Montserrat] tracking-wide hover:bg-cyan-800 transition"
      >
        Lihat Lebih Banyak
      </Link>
    </section>
  );
}
