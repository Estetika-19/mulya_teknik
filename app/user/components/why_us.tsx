export default function WhyUs() {
  const cards = [
    {
      img: "/images/whyus-1.png",
      title: "Harga Yang Kompetitif",
    },
    {
      img: "/file.svg",
      title: "Kualitas Terjamin",
    },
    {
      img: "/images/whyus-3.png",
      title: "Tim Profesional",
    },
    {
      img: "/images/whyus-4.png",
      title: "Pelayanan Cepat",
    },
  ];

  return (
    <section className="w-full bg-white flex justify-center items-center py-16 px-4">
      <div className="max-w-[1316px] flex flex-col items-center gap-10">
        <h2 className="text-4xl font-bold text-cyan-900 font-[Montserrat] mb-4">
          Mengapa Memilih Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl flex flex-col items-center justify-start p-8 hover:shadow-lg transition"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-28 h-28 object-contain mb-4"
              />
              <h3 className="text-2xl text-cyan-700 font-bold font-[Montserrat] text-center">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
