import "./globals.css"
import Navbar from "./components/navbar";

export const metadata = {
  title: "Mulya Teknik",
  description: "Website Resmi Mulya Teknik",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full max-w-none bg-gray-50 text-gray-900 overflow-x-hidden">

        <header>
          <Navbar />
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/6281282345757"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-50 bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
        >
          <img
            src="/images/whatsapp-putih.png" 
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>

      <footer className="w-full bg-cyan-900 text-white rounded-t-3xl 
        pt-12 md:pt-16 
        pb-10 
        px-6 sm:px-10 md:px-16 lg:px-24">

        <div className="max-w-7xl mx-auto 
          grid grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-12">

          {/* Logo + Alamat */}
          <div className="space-y-4">
            <img
              src="/images/Illustration3-removebg-preview (1).png"
              alt="Mulya Teknik"
              className="w-28 md:w-32"
            />
            <p className="text-sm sm:text-base font-[Montserrat] leading-relaxed text-zinc-200">
              Panjang, Panjangrejo,<br />
              Pundong, Bantul Regency,<br />
              Yogyakarta 55771
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-[Montserrat] mb-4">
              Lini Bisnis
            </h3>
            <ul className="space-y-2 text-sm sm:text-base font-light font-[Montserrat]">
              <li>
                <a 
                  href="https://emticon.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-cyan-300 transition"
                >
                  Emticon
                </a>
              </li>

              <li>
                <a 
                  href="http://bajaiwfjogja.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-cyan-300 transition"
                >
                  Baja IWF
                </a>
              </li>

              <li>
                <a 
                  href="http://kusenaluminiumjogja.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-cyan-300 transition"
                >
                  Kusen Aluminium
                </a>
              </li>

              <li>
                <a 
                  href="https://mulya-las.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-cyan-300 transition"
                >
                  Mulya Las
                </a>
              </li>
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-[Montserrat] mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-2 text-sm sm:text-base font-light font-[Montserrat]">
              <li>Customer Service</li>
              <li>Kebijakan dan Privasi</li>
              <li>Syarat dan Ketentuan</li>
              <li>Bantuan</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Optional — Kolom Tambahan (Media sosial atau jam operasional) */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-[Montserrat] mb-4">
              Media Sosial
            </h3>
            <ul className="space-y-2 text-sm sm:text-base font-light font-[Montserrat]">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>WhatsApp</li>
              <li>TikTok</li>
              <li>Youtube</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 md:mt-14 text-center text-xs sm:text-sm text-zinc-400 tracking-wide">
          © 2025 Mulya Teknik. All Rights Reserved.
        </div>

      </footer>


      </body>
    </html>
  );
}
