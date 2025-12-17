import { link } from "fs";
import Link from "next/link";

const services = [
  {
    title: "Emticon",
    description: "Canopy berkualitas tinggi, kuat, dan tahan lama untuk berbagai jenis bangunan.",
    image: "/images/emticon.png", 
    buttonText: "Lihat layanan",
    link: "https://www.facebook.com/profile.php?id=61576888525172",
  },
  {
    title: "Baja IWF",
    description: "Railing estetis dan aman, dibuat dari baja terbaik untuk kenyamanan Anda.",
    image: "/images/iwf.png",
    buttonText: "Lihat layanan",
    link: "http://bajaiwfjogja.com/",
  },
  {
    title: "Kusen Jogja",
    description: "Desain pagar modern dengan keamanan optimal dan material premium.",
    image: "/images/kusen.png",
    buttonText: "Lihat layanan",
    link: "http://kusenaluminiumjogja.com/",
  },
  {
    title: "Mulya Las Jogja",
    description: "Solusi struktur baja yang efisien dan tahan lama untuk proyek atap.",
    image: "/images/las.png",
    buttonText: "Lihat layanan",
    link: "https://www.facebook.com/profile.php?id=61579625003836"
  },
   {
    title: "Balkon Jogja",
    description: "Kontraktor profesional spesialis pembuatan railing balkon dan desain tangga modern di Yogyakarta.",
    image: "/images/las.png",
    buttonText: "Lihat layanan",
    link: "http://balkonjogja.com/",
  },
   {
    title: "Pagar Jogja",
    description: "Jasa pembuatan pagar & gerbang profesional di Yogyakarta sejak 2010. Berkualitas, rapi, tepat waktu, dan ditangani tenaga ahli berpengalaman.",
    image: "/images/las.png",
    buttonText: "Lihat layanan",
    link: "http://pagarjogja.com/"
  },
   {
    title: "Plafond Jogja",
    description: "Jasa pemasangan plafond yang berlokasi di Jogja, melayani berbagai jenis plafond gybsum, grc, kalsiboard, PVC, partisi dinding dan pembuatan rumah semi permanent.",
    image: "/images/plafond.png",
    buttonText: "Lihat layanan",
    link: "http://plafondjogja.com/"
  },
   {
    title: "ACP Jogja",
    description: "Melayani jasa pemasangan ACP (Alumunium composite panel) untuk pembuatan indoor, outdoor, back drop, sekat ruangan ACP, kusen ACP dan keperluan lain sesuai kebutuhan anda.",
    image: "/images/acp.png",
    buttonText: "Lihat layanan",
    link: "http://jogjaacp.com/"
  },
  {
    title: "Baja Ringan",
    description: "Jasa pemasangan baja ringan di Jogja untuk rangka atap, kanopi, green house, gudang dan berbagai jenis kandang ternak dan bangunan lain.",
    image: "/images/baja-ringan.png",
    buttonText: "Lihat layanan",
    link: "http://bajaringandijogja.com/"
  }
];

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
            href="/user/contact"
            className="px-6 py-3 bg-cyan-900 text-white font-bold font-[Montserrat] rounded-lg hover:bg-cyan-800 transition"
          >
            Hubungi Kami
          </Link>
        </section>

        {/* Layanan Section */}
          <section className="flex flex-col items-center gap-10 px-8 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {services.map((service, i) => (
                <a
                  key={i}
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-72 h-96 bg-white border border-gray-300 rounded-xl p-6 
                            flex flex-col items-center text-center hover:shadow-lg 
                            transition cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-32 h-32 mb-6"
                  />
                  <h3 className="text-cyan-900 font-bold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 text-base font-medium font-[Montserrat]">
                    {service.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

      </div>
    </div>
  );
}
