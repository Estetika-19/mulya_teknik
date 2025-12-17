"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Beranda", path: "/user/" },
    { name: "Tentang Kami", path: "/user/about" },
    { name: "Layanan", path: "/user/service" },
    { name: "Artikel", path: "/user/articles" },
    { name: "Portofolio", path: "/user/portofolio" },
    { name: "Kontak", path: "/user/contact" },
  ];

  return (
    <nav className="w-full bg-white text-cyan-900 shadow-md fixed top-0 left-0 z-50">

      {/* WRAPPER */}
      <div className="max-w-[1440px] mx-auto flex items-center justify-between 
        px-4 sm:px-6 md:px-8 py-3 md:py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/LOGO_MT-removebg-preview.png"
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
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

        {/* MOBILE BURGER */}
        <button
          className="md:hidden text-cyan-900 p-2"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md 
          animate-slideDown border-t border-zinc-200">

          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`block text-lg font-bold font-[Montserrat] py-3 
                    ${pathname === item.path ? "text-cyan-700 underline" : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
