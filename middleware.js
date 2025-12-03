import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Middleware aktif untuk root dan admin
export const config = { matcher: ["/", "/admin/:path*"] };

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // ============================
  // AUTO REDIRECT "/" -> "/user"
  // ============================
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/user", req.url));
  }

  // ==================================================
  // HANYA PROTEKSI /admin kecuali /admin/login
  // ==================================================
  if (pathname.startsWith("/admin")) {
    // Allow /admin/login tanpa token
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    // Ambil token dari cookies
    const token = req.cookies.get("admin_token")?.value;

    // Kalau tidak ada → redirect login
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    // Verifikasi token dengan JOSE
    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
      return NextResponse.next(); // token valid → lanjut
    } catch (err) {
      console.error("JWT invalid:", err);

      // Hapus cookie invalid
      const res = NextResponse.redirect(new URL("/admin/login", req.url));
      res.cookies.set("admin_token", "", {
        httpOnly: true,
        expires: new Date(0),
        path: "/",
      });

      return res;
    }
  }

  return NextResponse.next();
}
