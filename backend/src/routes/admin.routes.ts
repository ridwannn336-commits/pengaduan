import { Router } from "express";

import {
  getAllComplaintsAdminController,
  getAllUsersController,
  getDashboardStatsController,
  updateComplaintStatusController,
} from "@/controllers/admin.controller";

import { adminMiddleware } from "@/middlewares/admin.middleware";

import { authMiddleware } from "@/middlewares/auth.middleware";

import { validate } from "@/middlewares/validate.middleware";

import { updateComplaintStatusValidation } from "@/validations/admin.validation";

const router = Router();

router.use(authMiddleware);

router.use(adminMiddleware);

router.get(
  "/dashboard-stats",
  getDashboardStatsController
);

router.get(
  "/users",
  getAllUsersController
);

router.get(
  "/complaints",
  getAllComplaintsAdminController
);

router.patch(
  "/complaints/:id/status",
  validate(
    updateComplaintStatusValidation
  ),
  updateComplaintStatusController
);

export default router;