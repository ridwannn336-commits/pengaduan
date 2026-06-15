import { Router } from "express";

import {
  createComplaintController,
  deleteComplaintController,
  getComplaintsController,
  getMyComplaintsController,
  updateComplaintController,
  getMyStatsController,
  getComplaintDetailController,
} from "@/controllers/complaint.controller";

import { authMiddleware } from "@/middlewares/auth.middleware";

import { uploadMiddleware } from "@/middlewares/upload.middleware";

import { validate } from "@/middlewares/validate.middleware";

import {
  updateComplaintValidation,
} from "@/validations/complaint.validation";

const router = Router();

router.use(authMiddleware);

router.get(
  "/my-stats",
  getMyStatsController
);

router.get(
  "/my",
  getMyComplaintsController
);

router.get(
  "/",
  getComplaintsController
);

router.post(
  "/",
  uploadMiddleware.single("image"),
  createComplaintController
);

router.get(
  "/:id",
  getComplaintDetailController
);

router.put(
  "/:id",
  uploadMiddleware.single("image"),
  updateComplaintController
);

router.delete(
  "/:id",
  deleteComplaintController
);

export default router;