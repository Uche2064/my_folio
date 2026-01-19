import dotenv from "dotenv/config";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";


async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error(
      "Missing ADMIN_EMAIL or ADMIN_PASSWORD in environment. Set these in your .env before running the seed."
    );
    process.exit(1);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      password: hashedPassword,
      role: "ADMIN",
      updatedAt: new Date(),
    },
    create: {
      email,
      password: hashedPassword,
      name: "Lekwauwa Uche",
      role: "ADMIN",
    },
  });

  console.log(`Admin user ensured: ${user.email} (id: ${user.id})`);
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
