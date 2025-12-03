import Link from "next/link";

type Article = {
  id: number;
  title?: string;
  content?: string;
  image_path?: string;
};

export default async function ArticlesSection() {
  const res = await fetch(`${process.env.URL}/api/articles`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch articles:", res.status, res.statusText);
    return renderSection([]);
  }

  const json = await res.json();

  const maybeArray: any =
    Array.isArray(json) ? json : json?.data ?? json?.rows ?? json ?? [];

  const articles: Article[] = Array.isArray(maybeArray)
    ? maybeArray
    : [maybeArray].filter(Boolean);

  const latest = articles.slice(0, 3);
  return renderSection(latest);
}

function renderSection(
  latest: { id: number; title?: string; content?: string; image_path?: string }[]
) {
  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-10 py-20 flex flex-col justify-center items-center bg-white">
      {/* Judul */}
      <h2 className="text-cyan-900 text-3xl sm:text-4xl md:text-5xl font-bold font-[Montserrat] text-center mb-4">
        Dapatkan Wawasan & Inspirasi Terbaru.
      </h2>
      <p className="text-cyan-900 text-lg sm:text-xl md:text-2xl font-medium font-[Montserrat] text-center mb-12">
        Temukan informasi dan inspirasi terbaru di artikel kami.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                      gap-6 sm:gap-8 lg:gap-10 w-full max-w-[1100px] mx-auto">
        {latest.map((item) => (
          <Link
            href={`/user/articles/${item.id}`}
            key={item.id}
            className="w-full bg-white rounded-xl shadow-md flex flex-col gap-4 p-5 
                       hover:shadow-lg transition duration-200"
          >
            {/* Gambar */}
            <div className="h-48 sm:h-52 bg-zinc-200 rounded-lg overflow-hidden w-full">
              <img
                src={item.image_path || "https://placehold.co/400x250?text=No+Image"}
                alt={item.title ?? "Article"}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-black text-lg font-semibold font-[Inter] line-clamp-2">
              {item.title ?? "Untitled"}
            </h3>

            {/* Konten */}
            <p className="text-black text-base font-normal font-[Inter] leading-relaxed line-clamp-3">
              {item.content ?? ""}
            </p>

            {/* CTA */}
            <span className="text-cyan-900 font-medium hover:underline mt-auto">
              (see more)
            </span>
          </Link>
        ))}
      </div>

      {/* Tombol */}
      <Link href="/user/articles" className="mt-12">
        <button className="w-full sm:w-64 h-11 bg-cyan-900 hover:bg-cyan-800 text-white text-base font-bold font-[Montserrat] tracking-wide rounded-lg transition">
          Lihat Lebih Banyak
        </button>
      </Link>
    </section>
  );
}
