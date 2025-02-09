"use server";

import { z } from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  console.log(validatedFields);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }
  return { success: "Email sent!" };

  // You can add your API call here, for example:
  // const response = await fetch('http://your-nestjs-api-url/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(values),
  // });
  // const data = await response.json();
  // return data; // Return the response data if needed
};
