import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return Response.json({ message: "Data tidak lengkap" }, { status: 400 });
    }
    console.log("DB_NAME:", process.env.DB_NAME);
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mulya_teknik",
        JWT_SECRET:"bajaiwf345",
        });

    const [exist] = await conn.execute(
      "SELECT * FROM admin WHERE username = ?",
      [username]
    );

    if (exist.length > 0) {
      return Response.json({ message: "Username sudah ada" }, { status: 400 });
    }

    const hash = await bcrypt.hash(password, 10);

    await conn.execute(
      "INSERT INTO admin (username, password_hash) VALUES (?, ?)",
      [username, hash]
    );

    return Response.json({ message: "Register berhasil!" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
