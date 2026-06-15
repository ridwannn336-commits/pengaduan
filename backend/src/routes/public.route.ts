import { Router } from "express";

import {
  getPublicHomeController,
} from "@/controllers/admin.controller";

const router = Router();

router.get(
  "/home",
  getPublicHomeController
);

export default router;