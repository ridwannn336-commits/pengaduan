import "dotenv/config";

const requiredEnv = [
  "PORT",
  "DATABASE_URL",
  "JWT_SECRET",
];

requiredEnv.forEach((envKey) => {
  if (!process.env[envKey]) {
    throw new Error(
      `Missing environment variable: ${envKey}`
    );
  }
});

export const env = {
  PORT: process.env.PORT!,
  DATABASE_URL:
    process.env.DATABASE_URL!,
  JWT_SECRET:
    process.env.JWT_SECRET!,
};