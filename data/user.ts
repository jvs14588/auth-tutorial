import { db } from "@/lib/db";
import bcrypt from "bcrypt";

export const getUserByEmail = async (email: string) => {
  return await db.user.findUnique({
    where: {
      email,
    },
  });
};

export const getUserById = async (id: string) => {
  return await db.user.findUnique({
    where: {
      id,
    },
  });
};

export const createUser = async (
  email: string,
  name: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
};
