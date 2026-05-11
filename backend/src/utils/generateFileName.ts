import { randomUUID } from "crypto";

export const generateFileName = (
  fileName: string
) => {
  const extension =
    fileName.split(".").pop();

  return `${randomUUID()}.${extension}`;
};