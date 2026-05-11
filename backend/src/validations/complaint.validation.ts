import { z } from "zod";

export const createComplaintValidation =
  z.object({
    title: z.string().min(3),

    description: z
      .string()
      .min(10),
  });

export const updateComplaintValidation =
  z.object({
    title: z.string().min(3).optional(),

    description: z
      .string()
      .min(10)
      .optional(),
  });