import { db, Users } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
    await db.insert(Users).values([{ email: "sanjayatony@gmail.com", password_hash: "password" }]);
}
