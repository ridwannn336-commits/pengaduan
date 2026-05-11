import { Router } from "express";

import {
  loginController,
  registerController,
} from "@/controllers/auth.controller";

import { validate } from "@/middlewares/validate.middleware";

import {
  loginValidation,
  registerValidation,
} from "@/validations/auth.validation";

const router = Router();

router.post(
  "/register",
  validate(registerValidation),
  registerController
);

router.post(
  "/login",
  validate(loginValidation),
  loginController
);

export default router;