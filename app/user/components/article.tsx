export default function ArticlesSection() {
  return (
    <section className="w-full px-6 py-20 flex flex-col justify-center items-center bg-white">
      {/* Judul */}
      <h2 className="text-cyan-900 text-5xl font-bold font-[Montserrat] text-center mb-4">
        Dapatkan Wawasan & Inspirasi Terbaru.
      </h2>
      <p className="text-cyan-900 text-3xl font-medium font-[Montserrat] text-center mb-12">
        Temukan informasi dan inspirasi terbaru di artikel kami.
      </p>

      {/* Grid Artikel */}
      <div className="flex flex-wrap justify-center items-start gap-10 mb-12">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-96 bg-white rounded-xl shadow-[0_3px_8px_rgba(0,0,0,0.2)] flex flex-col gap-4 p-5"
          >
            {/* Gambar */}
            <div className="h-52 bg-zinc-200 rounded-lg overflow-hidden">
              <img
                src={`https://placehold.co/400x250?text=Article+${i}`}
                alt={`Article ${i}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Judul */}
            <h3 className="text-black text-lg font-semibold font-[Inter]">
              ARTICLE HEADING {i}
            </h3>

            {/* Isi */}
            <p className="text-black text-base font-normal font-[Inter] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat...{" "}
              <span className="text-cyan-900 font-medium cursor-pointer hover:underline">
                (see more)
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Tombol */}
      <button className="w-72 h-11 bg-cyan-900 hover:bg-cyan-800 text-white text-base font-bold font-[Montserrat] tracking-wide rounded-lg transition">
        Lihat Lebih Banyak
      </button>
    </section>
  );
}
