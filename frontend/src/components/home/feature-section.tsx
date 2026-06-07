"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📄",
    title: "Kehilangan",
    description:
      "Laporkan kehilangan dokumen atau barang penting.",
  },

  {
    icon: "🚧",
    title: "Fasilitas Rusak",
    description:
      "Laporkan jalan rusak, lampu mati, dan fasilitas umum.",
  },

  {
    icon: "💬",
    title: "Kritik & Saran",
    description:
      "Berikan masukan untuk kemajuan desa.",
  },

  {
    icon: "⚡",
    title: "Pelayanan Desa",
    description:
      "Laporkan pelayanan yang kurang maksimal.",
  },
];

export const FeatureSection =
  () => {
    return (
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <div
              className="
                inline-flex
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-4
                py-2
                text-sm
                text-blue-300
              "
            >
              FITUR SISTEM
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                text-white
                lg:text-5xl
              "
            >
              Jenis Pengaduan
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-slate-400
              "
            >
              Sistem dirancang untuk membantu masyarakat
              menyampaikan berbagai pengaduan secara mudah
              dan cepat.
            </p>
          </div>

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {features.map(
              (
                feature,
                index
              ) => (
                <motion.div
                  key={
                    feature.title
                  }
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-2xl
                    transition-all
                    hover:-translate-y-2
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-blue-500/10
                      to-transparent
                      opacity-0
                      transition-all
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        mb-6
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-600/20
                        text-3xl
                      "
                    >
                      {
                        feature.icon
                      }
                    </div>

                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-white
                      "
                    >
                      {
                        feature.title
                      }
                    </h3>

                    <p
                      className="
                        mt-4
                        leading-relaxed
                        text-slate-400
                      "
                    >
                      {
                        feature.description
                      }
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    );
  };