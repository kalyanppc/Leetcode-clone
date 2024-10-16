"use server";

import { db } from "@/prisma/db";

export async function signUp(clgId: number, name: string, password: string) {
      // do zod here
      const newUser = await db.user.create({
            data: {
                  clgId,
                  name,
                  password
            }
      })
      return newUser;
}