"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import { createUser, getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  console.log(validatedFields);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { email, password, name } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "Email already exists!",
    };
  }

  await createUser(email, name, password);

  return { success: "Email sent!" };

  // You can add your API call here, for example:
  // const response = await fetch('http://your-nestjs-api-url/Register', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(values),
  // });
  // const data = await response.json();
  // return data; // Return the response data if needed
};
