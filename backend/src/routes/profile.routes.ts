import { Router } from "express";

import {
  changePasswordController,
  getProfileController,
  updateProfileController,
} from "@/controllers/profile.controller";

import { authMiddleware } from "@/middlewares/auth.middleware";

import { validate } from "@/middlewares/validate.middleware";

import {
  changePasswordValidation,
  updateProfileValidation,
} from "@/validations/profile.validation";

const router = Router();

router.use(authMiddleware);

router.get(
  "/",
  getProfileController
);

router.put(
  "/",
  validate(
    updateProfileValidation
  ),
  updateProfileController
);

router.patch(
  "/change-password",
  validate(
    changePasswordValidation
  ),
  changePasswordController
);

export default router;