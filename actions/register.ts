"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  console.log(validatedFields);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }
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
