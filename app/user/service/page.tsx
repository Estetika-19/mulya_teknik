import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="w-full bg-white overflow-hidden">
        <div className="pt-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-8 py-20 text-center">
            <h1 className="text-cyan-900 text-5xl font-bold font-[Montserrat] mb-8">
            Produk dan Layanan
            </h1>
            <p className="max-w-3xl text-cyan-900 text-xl font-medium font-[Montserrat] mb-10">                 
            Semua solusi dari Mulya Teknik dirancang secara khusus untuk mendukung keberhasilan proyek Anda melalui konstruksi baja yang kuat, efisien, dan dikerjakan oleh tim profesional berpengalaman.
            </p>
            <Link
            href="/contact"
            className="px-6 py-3 bg-cyan-900 text-white font-bold font-[Montserrat] rounded-lg hover:bg-cyan-800 transition"
            >
            Hubungi Kami
            </Link>
        </section>

        {/* Gambar baris */}
        <div className="flex justify-center gap-6 px-8 mb-24 flex-wrap">
            <img src="https://placehold.co/494x329" alt="" className="rounded-xl" />
            <img src="https://placehold.co/513x342" alt="" className="rounded-xl" />
            <img src="https://placehold.co/513x342" alt="" className="rounded-xl" />
        </div>

        {/* Layanan Section */}
        <section className="flex flex-col items-center gap-10 px-8 pb-24">
            <h2 className="text-4xl font-bold text-cyan-900 font-[Montserrat]">
            Temukan Layanan dan Produk Mulya Teknik
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[...Array(8)].map((_, i) => (
                <div
                key={i}
                className="w-72 h-96 bg-white border border-gray-300 rounded-xl p-6 flex flex-col items-center text-center"
                >
                <img
                    src={`https://placehold.co/${150 + i * 10}x${150 + i * 5}`}
                    alt="Service"
                    className="w-32 h-32 mb-6"
                />
                <p className="text-zinc-600 text-base font-medium font-[Montserrat]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus a tristique risus. Etiam sed tempor leo, sit amet ornare neque.
                </p>
                </div>
            ))}
            </div>
        </section>
        </div>
    </div>
  );
}
