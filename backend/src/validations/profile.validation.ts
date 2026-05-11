import { z } from "zod";

export const updateProfileValidation =
  z.object({
    name: z
      .string()
      .min(3)
      .optional(),

    email: z
      .string()
      .email()
      .optional(),
  });

export const changePasswordValidation =
  z.object({
    currentPassword:
      z.string().min(6),

    newPassword:
      z.string().min(6),
  });