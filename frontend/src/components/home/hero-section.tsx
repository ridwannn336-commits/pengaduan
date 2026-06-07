"use client";

import Link from "next/link";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070",
];

export const HeroSection =
  () => {
    return (
      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          overflow-hidden
        "
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
            }}
            className="h-full w-full"
          >
            <img
              src={images[0]}
              alt="Village"
              className="
                h-full
                w-full
                object-cover
              "
            />
          </motion.div>

          <div
            className="
              absolute
              inset-0
              bg-slate-950/70
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-slate-950
              via-slate-950/70
              to-transparent
            "
          />
        </div>

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-7xl
            gap-16
            px-6
            lg:grid-cols-2
          "
        >
          {/* LEFT */}
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
            className="
              flex
              flex-col
              justify-center
            "
          >
            <div
              className="
                mb-6
                inline-flex
                w-fit
                items-center
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-4
                py-2
                text-sm
                text-blue-300
                backdrop-blur-xl
              "
            >
              🏛️ Sistem Pengaduan Desa Digital
            </div>

            <h1
              className="
                text-5xl
                font-black
                leading-tight
                text-white
                lg:text-7xl
              "
            >
              Welcome To{" "}

              <span className="text-blue-500">
                Pengaduan
              </span>{" "}

              Desa
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-relaxed
                text-slate-300
              "
            >
              Platform modern untuk membantu masyarakat
              desa melakukan pengaduan secara cepat,
              transparan, aman, dan responsif.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="
                  rounded-2xl
                  bg-blue-600
                  px-8
                  py-4
                  text-base
                  font-semibold
                  text-white
                  transition-all
                  hover:scale-105
                  hover:bg-blue-500
                "
              >
                Mulai Sekarang
              </Link>

              <Link
                href="/login"
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-8
                  py-4
                  text-base
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  hover:bg-white/10
                "
              >
                Login
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
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
            className="
              hidden
              items-center
              justify-center
              lg:flex
            "
          >
            <div
              className="
                relative
                w-full
                max-w-md
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-2xl
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-[32px]
                  bg-gradient-to-br
                  from-blue-500/10
                  to-transparent
                "
              />

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-600/20
                    "
                  >
                    🚨
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      Pengaduan Aktif
                    </h2>

                    <p className="text-sm text-slate-400">
                      Monitoring realtime
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Lampu jalan rusak",
                    "Kehilangan dokumen",
                    "Jalan berlubang",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                      "
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-white">
                            {item}
                          </h3>

                          <p className="mt-1 text-xs text-slate-400">
                            Sedang diproses admin
                          </p>
                        </div>

                        <div
                          className="
                            rounded-full
                            bg-blue-500/20
                            px-3
                            py-1
                            text-xs
                            text-blue-300
                          "
                        >
                          PROCESS
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };