import multer from "multer";

import path from "path";

import { Request } from "express";

import { generateFileName } from "@/utils/generateFileName";

const storage = multer.diskStorage({
  destination: (
    req,
    file,
    cb
  ) => {
    cb(
      null,
      "src/uploads/complaints"
    );
  },

  filename: (
    req,
    file,
    cb
  ) => {
    cb(
      null,
      generateFileName(
        file.originalname
      )
    );
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];

  if (
    !allowedMimeTypes.includes(
      file.mimetype
    )
  ) {
    return cb(
      new Error(
        "Invalid file type"
      )
    );
  }

  cb(null, true);
};

export const uploadMiddleware =
  multer({
    storage,
    limits: {
      fileSize: 5 * 1024 * 1024,
    },
    fileFilter,
  });