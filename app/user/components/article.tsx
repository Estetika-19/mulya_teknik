import Link from "next/link";

type Article = {
  id: number;
  title?: string;
  content?: string;
  image_path?: string;
};

export default async function ArticlesSection() {
  // fetch data (server-side)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/articles`, {
    cache: "no-store",
  });

  // jika fetch gagal, fallback ke array kosong
  if (!res.ok) {
    console.error("Failed to fetch articles:", res.status, res.statusText);
    const latestEmpty: Article[] = [];
    return renderSection(latestEmpty);
  }

  const json = await res.json();

  // Normalisasi: dukung beberapa bentuk response umum
  // - direct array:   [ {...}, {...} ]
  // - wrapped:        { data: [ ... ] } atau { rows: [ ... ] }
  const maybeArray: any =
    Array.isArray(json) ? json : json?.data ?? json?.rows ?? json ?? [];

  const articles: Article[] = Array.isArray(maybeArray)
    ? maybeArray
    : // jika ternyata masih object tunggal, ubah jadi array berisi object itu
      [maybeArray].filter(Boolean);

  const latest = articles.slice(0, 3);

  return renderSection(latest);
}

// ekstrak render supaya lebih bersih
function renderSection(latest: { id: number; title?: string; content?: string; image_path?: string }[]) {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-20 flex flex-col justify-center items-center bg-white">
      {/* Judul */}
      <h2 className="text-cyan-900 text-3xl sm:text-4xl md:text-5xl font-bold font-[Montserrat] text-center mb-4">
        Dapatkan Wawasan & Inspirasi Terbaru.
      </h2>
      <p className="text-cyan-900 text-lg sm:text-xl md:text-3xl font-medium font-[Montserrat] text-center mb-12">
        Temukan informasi dan inspirasi terbaru di artikel kami.
      </p>

      {/* Grid Artikel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 w-full max-w-[1200px]">
        {latest.map((item) => (
          <Link
            href={`/user/articles/${item.id}`}
            key={item.id}
            className="w-full bg-white rounded-xl shadow-[0_3px_8px_rgba(0,0,0,0.2)] flex flex-col gap-4 p-5 hover:shadow-lg transition"
          >
            {/* Gambar */}
            <div className="h-52 bg-zinc-200 rounded-lg overflow-hidden">
              <img
                src={item.image_path || "https://placehold.co/400x250?text=No+Image"}
                alt={item.title ?? "Article"}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Judul */}
            <h3 className="text-black text-lg font-semibold font-[Inter]">
              {item.title ?? "Untitled"}
            </h3>

            {/* Isi */}
            <p className="text-black text-base font-normal font-[Inter] leading-relaxed line-clamp-3">
              {item.content ?? ""}
            </p>

            <span className="text-cyan-900 font-medium hover:underline mt-auto">
              (see more)
            </span>
          </Link>
        ))}
      </div>

      {/* Tombol */}
      <Link href="/user/articles">
        <button className="w-full sm:w-64 h-11 bg-cyan-900 hover:bg-cyan-800 text-white text-base font-bold font-[Montserrat] tracking-wide rounded-lg transition">
          Lihat Lebih Banyak
        </button>
      </Link>
    </section>
  );
}
