import "./globals.css"
import Navbar from "./components/navbar";

export const metadata = {
  title: "Mulya Teknik",
  description: "Website Resmi Mulya Teknik",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        <header>
          <Navbar />
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="w-full bg-cyan-900 text-white rounded-t-3xl 
          pt-8 md:pt-10 
          pb-6 
          px-4 sm:px-6 md:px-12 lg:px-20">

          <div className="max-w-7xl mx-auto 
            grid grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-8 sm:gap-10 md:gap-12">

            {/* Logo + Alamat */}
            <div>
              <img
                src="/images/LOGO_MT-removebg-preview.png"
                alt="Mulya Teknik"
                className="w-24 sm:w-28 md:w-32 mb-3"
              />
              <p className="text-base sm:text-lg font-semibold font-[Montserrat] leading-relaxed">
                Panjang, Panjangrejo,<br />
                Pundong, Bantul Regency,<br />
                Yogyakarta 55771
              </p>
            </div>

            {/* Layanan */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-[Montserrat] mb-3">Layanan Kami</h3>
              <ul className="space-y-1.5 text-base sm:text-lg font-light font-[Montserrat]">
                <li>Emticon</li>
                <li>Emticon</li>
                <li>Emticon</li>
                <li>Emticon</li>
                <li>Emticon</li>
              </ul>
            </div>

            {/* Hubungi Kami */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-[Montserrat] mb-3">Hubungi Kami</h3>
              <ul className="space-y-1.5 text-base sm:text-lg font-light font-[Montserrat]">
                <li>Customer Service</li>
                <li>Kebijakan dan Privasi</li>
                <li>Syarat dan Ketentuan</li>
                <li>Bantuan</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* Ikuti Kami */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-[Montserrat] mb-3">Ikuti Kami</h3>
              <div className="flex items-center gap-3 sm:gap-4">
                <img src="https://placehold.co/61x57" className="w-12 h-12 sm:w-14 sm:h-14" />
                <img src="https://placehold.co/60x57" className="w-12 h-12 sm:w-14 sm:h-14" />
                <img src="https://placehold.co/61x57" className="w-12 h-12 sm:w-14 sm:h-14" />
              </div>
            </div>

          </div>

          <div className="mt-8 md:mt-10 text-center text-xs sm:text-sm text-zinc-300">
            © 2025 Mulya Teknik. All Rights Reserved.
          </div>

        </footer>

      </body>
    </html>
  );
}
