import { Router } from "express";

import {
  getDashboardStatsController,
  getAllComplaintsController,
  updateComplaintStatusController,
  getComplaintAnalyticsController,
  getAllUsersController,
} from "@/controllers/admin.controller";

import { authMiddleware } from "@/middlewares/auth.middleware";
import { adminMiddleware } from "@/middlewares/admin.middleware";

const router = Router();

router.use(
  authMiddleware,
  adminMiddleware
);

router.get(
  "/dashboard",
  getDashboardStatsController
);

router.get(
  "/complaints",
  getAllComplaintsController
);

router.get(
  "/analytics",
  getComplaintAnalyticsController
);

router.get(
  "/users",
  getAllUsersController
);

router.patch(
  "/complaints/:id",
  updateComplaintStatusController
);

export default router;