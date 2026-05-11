import express from "express";

import cors from "cors";

import helmet from "helmet";

import hpp from "hpp";

import compression from "compression";

import morgan from "morgan";

import path from "path";

import routes from "@/routes";

import { env } from "@/config/env";

import { errorMiddleware } from "@/middlewares/error.middleware";

import { globalRateLimit } from "@/middlewares/rate-limit.middleware";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],

    credentials: true,
  })
);

app.use(globalRateLimit);

app.use(helmet());

app.use(hpp());

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  "/uploads",
  express.static(
    path.join(
      __dirname,
      "uploads"
    )
  )
);

app.use(
  "/api/v1",
  routes
);

app.use(errorMiddleware);

app.listen(env.PORT, () => {
  console.log(
    `Server running on port ${env.PORT}`
  );
});