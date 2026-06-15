import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import hpp from "hpp";
import path from "path";

import routes from "./routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(hpp());

app.use(compression());

app.use(cookieParser());

app.use(morgan("dev"));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

console.log(
  "STATIC PATH:",
  path.join(
    process.cwd(),
    "src",
    "uploads"
  )
);

app.use(
  "/uploads",
  express.static(
    path.join(
      process.cwd(),
      "src",
      "uploads"
    ),
    {
      index: false,
      fallthrough: false,
    }
  )
);

app.use(
  "/api/v1",
  routes
);

export default app;