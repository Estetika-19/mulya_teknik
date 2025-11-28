export default async function ArtikelDetail(props) {
  const params = await props.params;
  const id = params.id;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/articles/${id}`, {
    cache: "no-store",
  });

  const article = await res.json();

  return (
    <div className="max-w-5xl mx-auto p-6 pt-32 flex flex-col items-center gap-10">

      {/* TITLE */}
      <div className="w-full bg-white">
        <h1 className="text-cyan-900 text-4xl md:text-5xl font-bold font-montserrat">
          {article.title}
        </h1>
      </div>

      {/* IMAGE */}
      {article.image_path && (
        <div className="w-full max-w-4xl h-80 bg-zinc-500/50 rounded-2xl overflow-hidden">
          <img
            src={article.image_path}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* CONTENT + DATE */}
      <div className="w-full flex flex-col gap-6">
        
        {/* CONTENT */}
        <div className="w-full bg-white">
          <p className="text-black text-xl font-normal font-inter leading-relaxed">
            {article.content}
          </p>
        </div>

        {/* DATE */}
        <div className="w-full bg-white">
          <p className="text-zinc-500 text-base font-inter">
            {new Date(article.created_at).toLocaleDateString("id-ID")}
          </p>
        </div>

      </div>
    </div>
  );
}
