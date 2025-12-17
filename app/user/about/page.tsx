export default function TentangKami() {
  return (
    <div className="w-full bg-white px-6 lg:px-20 pt-40 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Kolom Kiri - Gambar */}
        <div className="flex flex-col gap-10">
          <div className="rounded-2xl overflow-hidden h-96">
            <img
              src="/images/baja.jpg"
              alt="Gambar 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden h-96">
            <img
              src="/images/sipil.jpg"
              alt="Gambar 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Kolom Kanan - Konten */}
        <div className="flex flex-col gap-14">

          {/* Tentang Kami */}
          <div>
            <h2 className="text-cyan-900 text-4xl font-bold font-[Montserrat] mb-6">
              Tentang Kami
            </h2>
            <p className="text-zinc-600 text-xl font-medium font-[Montserrat] leading-relaxed">
              CV Mulya Teknik adalah perusahaan jasa kontraktor yang memiliki visi untuk 
              menjadi yang unggul dan berkualitas di Indonesia. Kami berkomitmen untuk 
              mempertahankan nilai usaha serta mencapai tujuan perusahaan melalui sinergi 
              antara manajemen dan karyawan. Dalam menjalankan operasional, kami selalu 
              mengedepankan prinsip kehati-hatian dalam setiap proses, mulai dari pemesanan, 
              produksi, hingga instalasi.
            </p>
          </div>

          {/* Visi & Misi */}
          <div>
            <h2 className="text-cyan-900 text-4xl font-bold font-[Montserrat] mb-6">
              Visi dan Misi
            </h2>

            <h3 className="text-zinc-700 text-2xl font-semibold font-[Montserrat] mb-2">
              Visi
            </h3>
            <p className="text-zinc-600 text-xl font-medium font-[Montserrat] leading-relaxed mb-6">
              Menjadi perusahaan jasa kontraktor yang unggul dan berkualitas di Indonesia.
            </p>

            <h3 className="text-zinc-700 text-2xl font-semibold font-[Montserrat] mb-2">
              Misi
            </h3>
            <ul className="text-zinc-600 text-xl font-medium font-[Montserrat] leading-relaxed list-decimal ml-6">
              <li>Merespon interaksi pelanggan dengan cepat dan tepat.</li>
              <li>Menyamakan pandangan antara manajemen dan karyawan.</li>
              <li>Meningkatkan pemasaran, SDM, sistem operasional, dan teknologi.</li>
              <li>Mengimplementasikan prinsip kehati-hatian dalam setiap proses.</li>
              <li>Meningkatkan kompetensi melalui kerja sama dengan kontraktor daerah.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
