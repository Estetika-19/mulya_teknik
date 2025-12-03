import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";
import * as React from 'react'

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

// =========================
// GET DETAIL BY ID
// =========================
export async function GET(req, context) {
  const { id } = (await context.params); // ❗ tidak perlu await

  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.query("SELECT * FROM portofolio WHERE id = ?", [id]);
  await conn.end();

  return Response.json(rows[0] || {});
}

// =========================
// UPDATE ARTICLE
// =========================
export async function PUT(req, context) {
  const { id } = (await context.params);

  const formData = await req.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const product = formData.get("product");
  const location = formData.get("location");
  const imageFile = formData.get("image");

  // --- Ambil image sebelumnya ---
  const conn = await mysql.createConnection(dbConfig);
  const [oldRows] = await conn.query(
    "SELECT image_path FROM portofolio WHERE id = ?",
    [id]
  );

  const currentImage = oldRows[0]?.image_path || "";

  let imageUrl = currentImage;

  // --- Jika ada file baru, upload ---
  if (imageFile && typeof imageFile.name === "string" && imageFile.size > 0) {
    const uploadsDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

    const fileName = Date.now() + "_" + imageFile.name;
    const filePath = path.join(uploadsDir, fileName);

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    imageUrl = `/uploads/${fileName}`;
  }

  // --- Update database ---
  await conn.query(
    "UPDATE portofolio SET title=?, description=?, product=?, location=?, image_path=? WHERE id=?",
    [title, description, product, location, imageUrl, id]
  );
  await conn.end();

  return Response.json({ success: true });
}

// =========================
// DELETE ARTICLE
// =========================
export async function DELETE(req, context) {
  const { id } = (await context.params);

  const conn = await mysql.createConnection(dbConfig);
  await conn.query("DELETE FROM portofolio WHERE id = ?", [id]);
  await conn.end();

  return Response.json({ success: true });
}
