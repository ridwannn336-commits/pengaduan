import app from "./app";
import { env } from "@/config/env";

// Jalankan app.listen HANYA jika di komputer lokal (bukan di production Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(env.PORT, () => {
    console.log(`Server running locally on port ${env.PORT}`);
  });
}

// WAJIB: Ekspor app agar bisa dibaca oleh Serverless Functions Vercel
export default app;