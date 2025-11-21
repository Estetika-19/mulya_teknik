import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "mulya_teknik",
};

export async function GET() {
  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.query("SELECT * FROM portofolio ORDER BY created_at DESC");
  await conn.end();
  return new Response(JSON.stringify({ data: rows }), {
    status: 200,
  });
}

export async function POST(req) {
  const formData = await req.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const product = formData.get("product");
  const location = formData.get("location");
  const imageFile = formData.get("image");

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
    "INSERT INTO portofolio (title, description, product, location, image_path) VALUES (?, ?, ?, ?, ?)",
    [title, description, product, location, imageUrl]
  );
  await conn.end();

  return new Response(JSON.stringify({ success: true, id: result.insertId }), {
    status: 200,
  });
}
