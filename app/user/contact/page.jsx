"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    alamat: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "6282329310878"; 

    const text = `Halo, saya *${form.name}*.\nAlamat: ${form.alamat}\n\nPesan:\n${form.message}`;

    const waURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(waURL, "_blank");
  };

  return (
    <div className="pt-32 px-6 md:px-12 lg:px-20 pb-20">
      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-900 font-[Montserrat]">
          Hubungi Kami
        </h1>
        <p className="text-lg text-zinc-600 mt-4 max-w-2xl mx-auto font-[Montserrat]">
          Kami siap membantu konsultasi kebutuhan konstruksi Anda. Silakan
          hubungi kami atau kirim pesan melalui formulir berikut.
        </p>
      </section>

      {/* GRID 2 KOLUMN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* INFORMASI KONTAK */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-cyan-900 font-[Montserrat] mb-2">
              Informasi Kontak
            </h2>
            <p className="text-zinc-700 font-[Montserrat] leading-relaxed">
              CV Mulya Teknik<br />
              Panjang, Panjangrejo,<br />
              Pundong, Bantul, Yogyakarta 55771
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-900 font-[Montserrat]">
              Telepon & WhatsApp
            </h3>
            <a
              href="https://wa.me/6281282345757"
              target="_blank"
              className="text-lg text-cyan-700 font-semibold block mt-1 hover:underline"
            >
              +62 812-8234-5757 (Baja IWF)
            </a>

            <a
              href="https://wa.me/6282145587272"
              target="_blank"
              className="text-lg text-cyan-700 font-semibold block mt-1 hover:underline"
            >
             +62 821-4558-7272 (Kusen)
            </a>

            <a
              href="https://wa.me/6285105374602"
              target="_blank"
              className="text-lg text-cyan-700 font-semibold block mt-1 hover:underline"
            >
             +62 851-0537-4602 (Las dan Emticon)
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-900 font-[Montserrat]">
              Jam Operasional
            </h3>
            <p className="text-zinc-700 font-[Montserrat]">
              Senin–Sabtu: 08.00–16.00 <br />
              Minggu & Hari Libur: Tutup
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md p-6 rounded-xl border border-gray-200 space-y-5"
        >
          <div>
            <label className="font-[Montserrat] font-semibold text-zinc-700">
              Nama
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="font-[Montserrat] font-semibold text-zinc-700">
              Alamat
            </label>
            <input
              type="text"
              name="alamat"
              required
              value={form.alamat}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-cyan-800"
            />
          </div>

          <div>
            <label className="font-[Montserrat] font-semibold text-zinc-700">
              Pesan
            </label>
            <textarea
              name="message"
              required
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none resize-none focus:ring-2 focus:ring-cyan-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-900 text-white font-bold py-2 rounded-lg hover:bg-cyan-800 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>

      {/* GOOGLE MAPS */}
      <div className="w-full h-80 mt-16 rounded-xl overflow-hidden shadow-md">
        <iframe
            src="https://www.google.com/maps?q=MG%20BOX%20(Pabrik%20Kardus,%20Suplier%20Kardus%20Packing%20Custom%20Jogja,%20Gratis%20Ongkir%20Area%20Yogyakarta)&output=embed"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
