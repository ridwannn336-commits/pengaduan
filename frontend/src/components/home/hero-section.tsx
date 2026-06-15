"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  getHomeData,
} from "@/services/public.service";

import {
  Complaint,
} from "@/types/admin.type";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070",
];

export const HeroSection = () => {

  const [
    complaints,
    setComplaints,
  ] = useState<Complaint[]>([]);

  useEffect(() => {

  const fetchComplaints =
    async () => {

      try {
             const data =
  await getHomeData();

console.log(
  "HOME DATA",
  data
);

setComplaints(
  data.complaints || []
);

      } catch (error) {

        console.log(error);

      }

    };

  fetchComplaints();

  const interval =
    setInterval(
      fetchComplaints,
      5000
    );

  return () =>
    clearInterval(interval);

}, []);

  return (

    <section className="relative isolate flex min-h-screen items-center overflow-hidden">

      <div className="absolute inset-0 -z-10 pointer-events-none">

        <motion.img
          src={images[0]}
          alt="Village"
          className="h-full w-full object-cover"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />

      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col justify-center"
        >

          <div className="mb-6 inline-flex w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-xl">
            🏛️ Sistem Pengaduan Desa Digital
          </div>

          <h1 className="text-5xl font-black leading-tight text-white lg:text-7xl">
            Welcome To
            <br />
            <span className="text-blue-500">
              Pengaduan Desa
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Platform modern untuk membantu masyarakat desa
            melakukan pengaduan secara cepat, transparan,
            aman, dan responsif.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              href="/register"
              className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Mulai Sekarang
            </Link>

            <Link
              href="/login"
              className="rounded-2xl border border-white/10 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/20"
            >
              Login
            </Link>

          </div>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="hidden items-center justify-center lg:flex"
        >

          <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            <h2 className="mb-6 text-2xl font-bold text-white">
              Pengaduan Terbaru
            </h2>

            <div className="space-y-4">

              {complaints.length === 0 && (

                <div className="rounded-2xl bg-white/5 p-4">

                  <p className="text-slate-400">
                    Belum ada pengaduan
                  </p>

                </div>

              )}

              {complaints.map((item) => (

                <div
                  key={item.id}
                  className="rounded-2xl bg-white/5 p-4"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="font-semibold text-white">
                        {item.title}
                      </p>

                      <p className="text-sm text-slate-400">

                        {item.status === "PENDING" &&
                          "Menunggu verifikasi"}

                        {item.status === "PROCESS" &&
                          "Sedang diproses admin"}

                        {item.status === "COMPLETED" &&
                          "Pengaduan selesai"}

                        {item.status === "REJECTED" &&
                          "Pengaduan ditolak"}

                      </p>

                    </div>

                    <span
                      className={`
                        rounded-full
                        px-3
                        py-1
                        text-xs

                        ${
                          item.status === "PENDING"
                            ? "bg-red-500/20 text-red-300"
                            : item.status === "PROCESS"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : item.status === "COMPLETED"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-gray-500/20 text-gray-300"
                        }
                      `}
                    >
                      {item.status}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

};