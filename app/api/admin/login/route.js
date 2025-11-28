import pool from "@/lib/dbConfig";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    const [rows] = await pool.execute(
      "SELECT * FROM admin WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, error: "Invalid username" },
        { status: 400 }
      );
    }

    const user = rows[0];

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({
      success: true,
      message: "Login success",
    });

    response.cookies.set("auth", token, {
      httpOnly: true,
      secure: false, // wajib false di localhost
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
