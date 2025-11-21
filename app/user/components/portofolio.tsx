export default function Portofolio()
{
    return(
        <section className="w-full bg-cyan-900 flex flex-col my-10 py-20 px-6 text-white">
      {/* Judul */}
      <h2 className="text-5xl font-bold italic font-[Montserrat] text-left ml-3 mb-3">
        Proyek-Proyek Terbaru Kami
      </h2>
      <p className="text-3xl font-semibold italic font-[Montserrat] text-zinc-300 text-left ml-3 mb-12">
        Proyek-proyek yang telah kami kerjakan
      </p>

      {/* Baris Pertama */}
      <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
        <div className="w-[900px] h-96 bg-zinc-500 rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/912x1140"
            alt="Proyek 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-96 h-96 bg-zinc-500 rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/400x500"
            alt="Proyek 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Baris Kedua */}
      <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
        <div className="w-[465px] h-96 bg-zinc-500 rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/466x582"
            alt="Proyek 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[836px] h-96 bg-zinc-500 rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/835x1113"
            alt="Proyek 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Tombol */}
      <button className="w-72 h-11 bg-orange-400 hover:bg-orange-500 transition text-white text-base font-bold font-[Montserrat] tracking-wide rounded-lg">
        Lihat Lebih Banyak
      </button>
    </section>
    );
}