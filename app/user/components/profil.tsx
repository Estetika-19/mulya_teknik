import Link from "next/link";

export default function ProfilCompany() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
      <div className="bg-[#0E5568] rounded-[30px] flex flex-col lg:flex-row justify-between items-center px-6 sm:px-12 py-8 sm:py-12 gap-8 sm:gap-12">
        {/* Kiri - teks */}
        <div className="flex flex-col justify-center gap-4 sm:gap-6 w-full lg:w-1/2 text-white font-[Montserrat]">
          <h2 className="text-2xl sm:text-3xl font-medium leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <p className="text-base sm:text-xl font-normal leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            a tristique risus. Etiam sed tempor leo, sit amet ornare neque. In
            ornare semper est, ac porttitor lacus scelerisque et.
          </p>

          {/* Tombol link ke halaman "Tentang Kami" */}
          <Link
            href="/user/about"
            className="w-full sm:w-fit px-6 py-3 mt-2 border-2 border-white rounded-lg text-base font-bold text-center hover:bg-white hover:text-[#0E5568] transition"
          >
            Pelajari lebih lanjut
          </Link>
        </div>

        {/* Kanan - gambar */}
        <div className="w-full lg:w-[450px] h-64 sm:h-80 lg:h-[300px] rounded-2xl border-[6px] border-gray-400/50 overflow-hidden flex justify-center items-center">
          <img
            src="images\DJI_0121.jpg"
            alt="Profil Perusahaan"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
