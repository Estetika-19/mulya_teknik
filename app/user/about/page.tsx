export default function TentangKami() {
  return (
    <div className="relative w-[1440px] h-[1580px] bg-white overflow-hidden mx-auto">
      {/* 🔹 Gambar kiri */}
      <div className="absolute top-[103px] left-0 w-[696px] h-[1086px] pl-14 pr-7 py-14 flex flex-col gap-14">
        <div className="h-96 relative rounded-[19px] overflow-hidden">
          <img
            className="absolute w-[911px] h-[683px] left-[-56px] top-[-160px]"
            src="https://placehold.co/911x683"
            alt="Gambar 1"
          />
        </div>
        <div className="h-96 relative rounded-[19px] overflow-hidden">
          <img
            className="absolute w-[692px] h-[923px] left-[-80px] top-[-330px]"
            src="https://placehold.co/692x923"
            alt="Gambar 2"
          />
        </div>
      </div>

      {/* 🔹 Konten kanan */}
      <div className="absolute top-[103px] left-[696px] w-[744px] h-[1062px] pl-7 pr-20 py-14 flex flex-col">
        {/* Tentang Kami */}
        <div className="relative h-96 mb-10">
          <h2 className="absolute top-[28px] left-[30px] text-cyan-900 text-4xl font-bold font-['Montserrat']">
            Tentang Kami
          </h2>
          <p className="absolute top-[108px] left-[36px] w-[567px] text-zinc-600 text-2xl font-medium font-['Montserrat'] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tristique risus. Etiam sed tempor leo,
            sit amet ornare neque. In ornare semper est, ac porttitor lacus scelerisque et. Proin viverra auctor magna
            non viverra. In varius diam arcu, placerat cursus nisi fermentum at. Praesent condimentum iaculis ante, sed
            suscipit elit sodales in.
          </p>
        </div>

        {/* Visi dan Misi */}
        <div className="relative h-[547px]">
          <h2 className="absolute top-[28px] left-[30px] text-cyan-900 text-4xl font-bold font-['Montserrat']">
            Visi dan Misi
          </h2>
          <h3 className="absolute top-[108px] left-[36px] text-zinc-600 text-3xl font-semibold font-['Montserrat']">
            Misi
          </h3>
          <p className="absolute top-[147px] left-[36px] w-[567px] text-zinc-600 text-2xl font-medium font-['Montserrat'] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tristique risus.
          </p>
          <h3 className="absolute top-[222px] left-[34px] text-zinc-600 text-3xl font-semibold font-['Montserrat']">
            Visi
          </h3>
          <p className="absolute top-[261px] left-[34px] w-[567px] text-zinc-600 text-2xl font-medium font-['Montserrat'] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tristique risus. Etiam sed tempor leo,
            sit amet ornare neque. In ornare semper est, ac porttitor lacus scelerisque et. Proin viverra auctor magna
            non viverra. In varius diam arcu, placerat cursus nisi fermentum at. Praesent condimentum iaculis ante, sed
            suscipit elit sodales in.
          </p>
        </div>
      </div>
    </div>
  );
}
