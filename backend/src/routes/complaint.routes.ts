import { Router } from "express";

import {
  createComplaintController,
  deleteComplaintController,
  getComplaintsController,
  updateComplaintController,
} from "@/controllers/complaint.controller";

import { queryMiddleware } from "@/middlewares/query.middleware";

import { authMiddleware } from "@/middlewares/auth.middleware";

import { uploadMiddleware } from "@/middlewares/upload.middleware";

import { validate } from "@/middlewares/validate.middleware";

import {
  createComplaintValidation,
  updateComplaintValidation,
} from "@/validations/complaint.validation";

const router = Router();

router.use(authMiddleware);

router.get(
  "/",
  getComplaintsController
);

router.get(
  "/",
  queryMiddleware,
  getComplaintsController
);

router.post(
  "/",
  uploadMiddleware.single("image"),
  validate(
    createComplaintValidation
  ),
  createComplaintController
);

router.put(
  "/:id",
  validate(
    updateComplaintValidation
  ),
  updateComplaintController
);

router.delete(
  "/:id",
  deleteComplaintController
);

export default router;