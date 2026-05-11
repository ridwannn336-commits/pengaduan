import { MESSAGE } from "@/constants/message.constant";

import {
  createUser,
  findUserByEmail,
} from "@/repositories/auth.repository";

import { comparePassword, hashPassword } from "@/utils/hash";

import { generateToken } from "@/utils/jwt";

import { LoginBody, RegisterBody } from "@/types/auth.type";

export const registerService = async (body: RegisterBody) => {
  const existingUser = await findUserByEmail(body.email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hashPassword(body.password);

  const user = await createUser(
    body.name,
    body.email,
    hashedPassword
  );

  const token = generateToken({
    userId: user.id,
    role: user.role,
  });

  return {
    token,
    user,
  };
};

export const loginService = async (body: LoginBody) => {
  const user = await findUserByEmail(body.email);

  if (!user) {
    throw new Error(MESSAGE.INVALID_CREDENTIALS);
  }

  const isPasswordValid = await comparePassword(
    body.password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error(MESSAGE.INVALID_CREDENTIALS);
  }

  const token = generateToken({
    userId: user.id,
    role: user.role,
  });

  return {
    token,
    user,
  };
};