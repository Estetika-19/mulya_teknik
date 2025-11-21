"use client";

import React from "react";

export default function TrustedBy() {
  const topRow: string[] = [
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
  ];

  const bottomRow: string[] = [
    "/images/client4.png",
    "/images/client5.png",
    "/images/client6.png",
    "/images/client7.png",
    "/images/client8.png",
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center py-20 px-4">
      {/* Judul */}
      <h2 className="text-cyan-900 text-2xl font-bold font-[Montserrat] tracking-wide mb-10 text-center">
        Telah Dipercaya Oleh
      </h2>

      {/* Baris 1 */}
      <div className="flex flex-wrap justify-center items-center gap-16 mb-10 animate-scroll">
        {topRow.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Client ${i + 1}`}
            className="w-64 h-20 object-contain"
          />
        ))}
      </div>

      {/* Baris 2 */}
      <div className="flex flex-wrap justify-center items-center gap-20 animate-scroll-reverse">
        {bottomRow.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Client ${i + 4}`}
            className="w-32 h-32 object-contain"
          />
        ))}
      </div>
    </section>
  );
}
