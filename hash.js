import bcrypt from "bcryptjs";

// Password asli
const plainPassword = "admin1234";

// Buat hash dengan 10 salt rounds
const hashedPassword = bcrypt.hashSync(plainPassword, 10);

console.log("Plain:", plainPassword);
console.log("Hashed:", hashedPassword);
