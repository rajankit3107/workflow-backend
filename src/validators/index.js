import z from "zod";

//register schema
export const registerUserSchema = z.object({
  email: z
    .string()
    .min(1, { message: `email is required` })
    .email(`please enter a valid email`),

  username: z
    .string()
    .min(3, { message: `username should be more than 3 characters` })
    .max(13, { message: `username cannot exceed 13 characters` }),

  password: z
    .string()
    .min(4, { message: `password should be greater than 4 characters` })
    .max(14, { message: `passowrd should be less than 14 characters` }),
});

//login schema
export const loginUserSchema = z.object({
  email: z
    .string()
    .min(1, { message: `email is required` })
    .email(`please enter a valid email`),
  password: z
    .string()
    .min(4, { message: `password should be greater than 4 characters` })
    .max(14, { message: `passowrd should be less than 14 characters` }),
});
