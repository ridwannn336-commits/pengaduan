import { Router } from "express";

import {
  getProfileController,
  updateProfileController,
} from "@/controllers/profile.controller";

import { authMiddleware } from "@/middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get(
  "/",
  getProfileController
);

router.put(
  "/",
  updateProfileController
);



export default router;