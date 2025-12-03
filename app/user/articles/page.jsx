"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ArtikelPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await fetch("${process.env.URL}/api/articles");
        const json = await res.json();
        setArticles(json.data);
      } catch (err) {
        console.error("Failed to load articles", err);
      }
    };
    getArticles();
  }, []);

  return (
    <div className="bg-white text-black font-[Montserrat]">
      <div className="pt-32">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-12 px-10 py-16">
          {articles.length > 0 ? (
            <>
              <Link href={`/user/articles/${articles[0].id}`}>
                <div className="bg-gray-200 w-[460px] h-[280px] rounded-2xl overflow-hidden cursor-pointer">
                  <img
                    src={articles[0].image_path || "https://placehold.co/460x280"}
                    alt="Artikel utama"
                    width={460}
                    height={280}
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="max-w-md">
                <h2 className="text-2xl font-bold text-cyan-900 mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-black text-lg font-[Inter] mb-3">
                  {articles[0].content.substring(0, 150)}... (see more)
                </p>
                <p className="text-gray-500 text-sm font-[Inter]">
                  {new Date(articles[0].created_at).toLocaleDateString()}
                </p>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </section>

        {/* Grid Artikel */}
        <section className="px-10 py-16">
          <div className="grid md:grid-cols-3 gap-10 justify-center">

            {articles.slice(1).map((item) => (
              <Link href={`/user/articles/${item.id}`} key={item.id}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col cursor-pointer">

                  <div className="relative bg-gray-300 rounded-lg h-48 overflow-hidden">
                    <img
                      src={item.image_path || "https://placehold.co/426x452"}
                      alt="Artikel"
                      width={426}
                      height={452}
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-semibold mt-4 font-[Inter]">
                    {item.title}
                  </h3>

                  <p className="text-base font-[Inter] mt-2">
                    {item.content.substring(0, 120)}...
                  </p>
                </div>
              </Link>
            ))}

            {articles.length <= 1 && (
              <p className="text-center col-span-3 text-gray-500">
                Tidak ada artikel lainnya.
              </p>
            )}

          </div>
        </section>

      </div>
    </div>
  );
}
