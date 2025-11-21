import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "mulya_teknik",
};

// ---------------------------------------------------
// GET DETAIL
// ---------------------------------------------------
export async function GET(req) {
  const id = req.url.split("/").pop(); // aman tanpa params

  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.query("SELECT * FROM portofolio WHERE id = ?", [id]);
  await conn.end();

  return NextResponse.json(rows[0] || {});
}


// ---------------------------------------------------
// UPDATE
// ---------------------------------------------------
export async function PUT(req, { params }) {
  const id = params.id;
  const formData = await req.formData();

  const title = formData.get("title");
  const description = formData.get("description");
  const product = formData.get("product");
  const location = formData.get("location");
  const imageFile = formData.get("image");
  const currentImage = formData.get("current_image");

  let imageUrl = currentImage;

  // jika upload baru
  if (imageFile && typeof imageFile === "object" && imageFile.size > 0) {
    const uploadsDir = path.join(process.cwd(), "/public/uploads");
    if (!fs.existsSync(uploadsDir))
      fs.mkdirSync(uploadsDir, { recursive: true });

    const newFileName = `${Date.now()}_${imageFile.name}`;
    const filePath = path.join(uploadsDir, newFileName);

    const arrayBuffer = await imageFile.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

    imageUrl = `/uploads/${newFileName}`;
  }

  const conn = await mysql.createConnection(dbConfig);
  await conn.query(
    "UPDATE portofolio SET title=?, description=?, product=?, location=?, image_path=? WHERE id=?",
    [title, description, product, location, imageUrl, id]
  );
  await conn.end();

  return Response.json({ success: true });
}

// ---------------------------------------------------
// DELETE
// ---------------------------------------------------
export async function DELETE(req, { params }) {
  const conn = await mysql.createConnection(dbConfig);
  await conn.query("DELETE FROM portofolio WHERE id = ?", [params.id]);
  await conn.end();
  return Response.json({ success: true });
}
