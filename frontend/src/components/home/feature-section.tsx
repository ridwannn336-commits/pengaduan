"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🚧",
    title: "Jalan Rusak",
    description:
      "Melaporkan jalan berlubang atau rusak agar segera diperbaiki.",
  },
  {
    icon: "💡",
    title: "Lampu Jalan",
    description:
      "Melaporkan lampu jalan yang mati atau mengalami kerusakan.",
  },
  {
    icon: "🌳",
    title: "Lingkungan",
    description:
      "Melaporkan sampah, banjir, pohon tumbang, dan masalah lingkungan.",
  },
  {
    icon: "🏢",
    title: "Pelayanan Desa",
    description:
      "Melaporkan pelayanan administrasi desa yang kurang maksimal.",
  },
];

export const FeatureSection = () => {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">

          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-300">
            KATEGORI PENGADUAN
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Jenis Pengaduan
          </h2>

          <p className="mt-4 text-slate-400">
            Sistem menerima berbagai jenis laporan masyarakat untuk meningkatkan kualitas pelayanan desa.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {features.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};