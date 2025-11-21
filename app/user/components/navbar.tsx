"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Beranda", path: "/user/" },
    { name: "Tentang Kami", path: "/user/about" },
    { name: "Layanan", path: "/user/service" },
    { name: "Artikel", path: "/user/blog" },
    { name: "Portofolio", path: "/user/portofolio" },
    { name: "Kontak", path: "/user/contact" },
  ];

  return (
    <nav className="w-full bg-white text-cyan-900 shadow-md fixed top-0 left-0 z-50">
      {/* Wrapper */}
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/images/Logo Mulya Inti Corpora-04.png"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
          {/* <h1 className="text-3xl font-bold font-[Montserrat]">Mulya Teknik</h1> */}
        </div>

        {/* Menu navigasi */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`text-xl font-bold font-[Montserrat] hover:text-cyan-700 transition ${
                  pathname === item.path ? "underline text-cyan-700" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
