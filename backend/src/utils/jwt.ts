import jwt from "jsonwebtoken";

import { env } from "@/config/env";

type Payload = {
  userId: string;
  role: string;
};

export const generateToken = (payload: Payload) => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET);
};