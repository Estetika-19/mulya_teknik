import pool from "@/lib/dbConfig";

export async function GET() {
  const [rows] = await pool.query("SELECT * FROM admin");
  return Response.json(rows);
}
