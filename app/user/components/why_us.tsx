export default function WhyUs() {
  const cards = [
    { img: "images/icons8-estimate-96.png", title: "Harga Yang Kompetitif" },
    { img: "images/icons8-quality-96.png", title: "Kualitas Terjamin" },
    { img: "images/icons8-team-96.png", title: "Tim Profesional" },
    { img: "images/icons8-fast-96.png", title: "Pelayanan Cepat" },
  ];

  return (
    <section className="w-full bg-white flex justify-center items-center py-10 sm:py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1316px] flex flex-col items-center gap-6 sm:gap-10">

        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-cyan-900 font-[Montserrat] mb-4 sm:mb-6 text-center">
          Mengapa Memilih Kami
        </h2>

        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-4 
          sm:gap-8 
          lg:gap-10 
          w-full
        ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-xl 
                flex 
                flex-col 
                items-center 
                justify-start 
                p-3 
                sm:p-6 
                lg:p-8 
                hover:shadow-lg 
                transition
              "
            >
              <img
                src={card.img}
                alt={card.title}
                className="
                  w-12 h-12        
                  sm:w-20 sm:h-20  
                  lg:w-28 lg:h-28  
                  object-contain 
                  mb-2 
                  sm:mb-4
                "
              />

              <h3
                className="
                  text-sm           
                  sm:text-xl        
                  lg:text-2xl       
                  text-cyan-700 
                  font-bold 
                  font-[Montserrat] 
                  text-center
                "
              >
                {card.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
