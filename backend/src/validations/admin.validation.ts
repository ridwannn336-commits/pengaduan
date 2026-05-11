import { z } from "zod";

export const updateComplaintStatusValidation =
  z.object({
    status: z.enum([
      "PENDING",
      "PROCESS",
      "COMPLETED",
      "REJECTED",
    ]),

    adminResponse:
      z.string().optional(),
  });