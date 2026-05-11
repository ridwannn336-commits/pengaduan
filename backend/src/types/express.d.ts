import { Role } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        role: Role;
      };
    }

    interface Query {
      page?: string;
      limit?: string;
      skip?: string;
      search?: string;
      status?: string;
    }
  }
}

export {};