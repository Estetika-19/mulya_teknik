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

export async function GET(req, context) {
  const { id } = (await context.params); 

  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.query("SELECT * FROM articles WHERE id = ?", [id]);
  await conn.end();

  return new Response(JSON.stringify(rows[0] || {}), { status: 200 });
}

// PUT / UPDATE
export async function PUT(req, props) {
  const params = await props.params;
  const { id } = params;
  const formData = await req.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  const currentImage = formData.get("current_image");
  const imageFile = formData.get("image");

  let imageUrl = currentImage || "";

  if (imageFile && imageFile.size > 0) {
    const uploadsDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

    const fileName = `${Date.now()}_${imageFile.name}`;
    const filePath = path.join(uploadsDir, fileName);
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    imageUrl = `/uploads/${fileName}`;
  }

  const conn = await mysql.createConnection(dbConfig);
  await conn.query("UPDATE articles SET title=?, content=?, image_path=? WHERE id=?", [
    title, content, imageUrl, id
  ]);
  await conn.end();

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}

// DELETE
export async function DELETE(req, props) {
  const params = await props.params;
  const { id } = params;
  const conn = await mysql.createConnection(dbConfig);
  await conn.query("DELETE FROM articles WHERE id=?", [id]);
  await conn.end();

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
