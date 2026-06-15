import { Router } from "express";

import authRoutes from "@/routes/auth.routes";
import complaintRoutes from "@/routes/complaint.routes";
import adminRoutes from "@/routes/admin.routes";
import profileRoutes from "@/routes/profile.routes";

const router = Router();

router.use(
  "/auth",
  authRoutes
);

router.use(
  "/complaints",
  complaintRoutes
);

router.use(
  "/admin",
  adminRoutes
);

import publicRoutes
  from "./public.route";

router.use(
  "/public",
  publicRoutes
);

router.use(
  "/profile",
  profileRoutes
);

export default router;