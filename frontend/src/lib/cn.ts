import { clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined;