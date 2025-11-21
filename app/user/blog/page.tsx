import Image from "next/image";
import Link from "next/link";

export default function ArtikelPage() {
  return (
    <div className="bg-white text-black font-[Montserrat]">
      {/* Biar ga ketiban navbar */}
      <div className="pt-32">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-12 px-10 py-16">
          <div className="bg-gray-200 w-[460px] h-[280px] rounded-2xl overflow-hidden">
            <img
              src="https://placehold.co/460x280"
              alt="Artikel utama"
              width={460}
              height={280}
              className="object-cover"
            />
          </div>
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-cyan-900 mb-4">
              The Newest Articles ...
            </h2>
            <p className="text-black text-lg font-[Inter] mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat... (see more)
            </p>
            <p className="text-gray-500 text-sm font-[Inter]">DD/MM/YYYY</p>
          </div>
        </section>

        {/* Grid Artikel */}
        <section className="px-10 py-16">
          <div className="grid md:grid-cols-3 gap-10 justify-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
              >
                <div className="relative bg-gray-300 rounded-lg h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/426x452"
                    alt="Artikel"
                    width={426}
                    height={452}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 font-[Inter]">
                  ARTICLE HEADING {i + 1}
                </h3>
                <p className="text-base font-[Inter] mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
