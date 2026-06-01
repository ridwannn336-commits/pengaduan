import { Router } from "express";

import {
  getAllComplaintsController,
  updateComplaintStatusController,
  getDashboardStatsController,
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

router.patch(
  "/complaints/:id",
  updateComplaintStatusController
);

export default router;