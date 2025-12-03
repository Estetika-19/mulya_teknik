import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

export async function GET() {
  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.query("SELECT * FROM articles ORDER BY created_at DESC");
  await conn.end();

  return Response.json({ data: rows });
}

export async function POST(req) {
  const formData = await req.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  const imageFile = formData.get("image"); // File object

  let imageUrl = "";

  if (imageFile && imageFile.size > 0) {
    const uploadsDir = path.join(process.cwd(), "/public/uploads");
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

    const fileName = `${Date.now()}_${imageFile.name}`;
    const filePath = path.join(uploadsDir, fileName);

    const arrayBuffer = await imageFile.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

    imageUrl = `/uploads/${fileName}`;
  }

  const conn = await mysql.createConnection(dbConfig);
  const [result] = await conn.query(
    "INSERT INTO articles (title, content, image_path) VALUES (?, ?, ?)",
    [title, content, imageUrl]
  );
  await conn.end();

  return new Response(JSON.stringify({ success: true, id: result.insertId }), { status: 200 });
}
