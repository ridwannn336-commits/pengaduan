"use client";

import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
};

type AuthState = {
  token: string | null;
  user: User | null;

  setAuth: (
    token: string,
    user: User
  ) => void;

  clearAuth: () => void;
};

export const useAuthStore =
  create<AuthState>((set) => ({
    token: null,
    user: null,

    setAuth: (token, user) =>
      set({
        token,
        user,
      }),

    clearAuth: () =>
      set({
        token: null,
        user: null,
      }),
  }));