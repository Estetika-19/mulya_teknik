import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export const config = { matcher: ["/admin/:path*"] };

export async function middleware(req) {
  const token = req.cookies.get("admin_token")?.value;
  if (!token) return NextResponse.redirect(new URL("/admin/login", req.url));

  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
}

export const runtime = "nodejs"; // ⚡ WAJIB Node.js
