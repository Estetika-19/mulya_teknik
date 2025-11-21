import Link from "next/link";

export default function ProfilCompany() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-10 py-16">
      <div className="bg-[#0E5568] rounded-[30px] flex justify-between items-center px-12 py-12 gap-12">
        {/* Kiri - teks */}
        <div className="flex flex-col justify-center gap-6 w-1/2 text-white font-[Montserrat]">
          <h2 className="text-3xl font-medium leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <p className="text-xl font-normal leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            a tristique risus. Etiam sed tempor leo, sit amet ornare neque. In
            ornare semper est, ac porttitor lacus scelerisque et.
          </p>

          {/* Tombol link ke halaman "Tentang Kami" */}
          <Link
            href="/about"
            className="w-fit px-6 py-3 mt-2 border-2 border-white rounded-lg text-base font-bold hover:bg-white hover:text-[#0E5568] transition"
          >
            Pelajari lebih lanjut
          </Link>
        </div>

        {/* Kanan - gambar */}
        <div className="w-[450px] h-[300px] rounded-2xl border-[6px] border-gray-400/50 overflow-hidden flex justify-center items-center">
          <img
            src="https://placehold.co/476x595"
            alt="Profil Perusahaan"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
