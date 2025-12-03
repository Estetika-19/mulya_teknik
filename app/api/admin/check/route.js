export const runtime = "nodejs";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function GET(req) {
  const token = req.cookies.get("admin_token")?.value;
  if (!token) return NextResponse.json({ auth: false });

  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return NextResponse.json({ auth: true });
  } catch {
    return NextResponse.json({ auth: false });
  }
}
