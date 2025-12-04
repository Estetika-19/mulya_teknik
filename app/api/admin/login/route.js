import pool from "@/lib/dbConfig";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  const { username, password } = await req.json();

  // cek user
  const [rows] = await pool.execute(
    "SELECT * FROM admin WHERE username = ?",
    [username]
  );

  if (rows.length === 0) {
    return NextResponse.json({ success: false, error: "Invalid username" }, { status: 400 });
  }

  const user = rows[0];

  // cek password
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return NextResponse.json({ success: false, error: "Invalid password" }, { status: 400 });
  }

  // generate JWT pakai jose
  const token = await new SignJWT({ id: user.id, username: user.username })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

  // response + set cookie
  const response = NextResponse.json({ success: true, message: "Login success" });
  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    maxAge: 60*60*24,
  });

  return response;
}
