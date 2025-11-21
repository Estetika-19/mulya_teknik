import Image from "next/image";

export default function PortofolioPage() {
  return (
    <div className="w-full bg-white flex flex-col items-start gap-20 overflow-hidden">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <img src="https://placehold.co/102x102" alt="Logo" width={80} height={80} />
        <nav className="flex gap-10 text-cyan-900 text-lg font-bold font-[Montserrat]">
          <a href="/" className="hover:text-cyan-600">Beranda</a>
          <a href="/about" className="hover:text-cyan-600">Tentang Kami</a>
          <a href="/produk" className="hover:text-cyan-600">Produk & Layanan</a>
          <a href="/portofolio" className="hover:text-cyan-600">Portofolio</a>
        </nav>
      </header>

      {/* Judul */}
      <section className="px-12">
        <h1 className="text-3xl font-bold font-[Montserrat] text-black mb-6">
          Portofolio Proyek Terbaru
        </h1>

        {/* Filter */}
        <div className="flex gap-6 mb-8">
          <button className="px-4 py-2 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200">
            Semua Produk
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200">
            Semua Lokasi
          </button>
          <button className="text-gray-500 hover:underline">Hapus Filter</button>
        </div>

        {/* Grid Portofolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md bg-gray-100">
              <div className="h-64 bg-gray-300" />
              <div className="p-4">
                <h3 className="text-lg font-bold font-[Montserrat] text-black">Proyek A</h3>
                <p className="text-gray-700 font-[Inter] text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
