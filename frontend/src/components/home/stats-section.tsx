"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getHomeData,
} from "@/services/public.service";

type Stats = {
  total: number;
  completed: number;
  totalUsers: number;
};

export const StatsSection = () => {

  const [stats, setStats] =
    useState<Stats>({
      total: 0,
      completed: 0,
      totalUsers: 0,
    });

  useEffect(() => {

  const fetchStats =
    async () => {

      try {

const data =
  await getHomeData();

       setStats({
  total: data.total,
  completed: data.completed,
  totalUsers: data.totalUsers,
});

      } catch (error) {

        console.log(error);

      }

    };

  fetchStats();

  const interval =
    setInterval(
      fetchStats,
      5000
    );

  return () =>
    clearInterval(interval);

}, []);

  return (

    <section
      className="
        relative
        z-10
        px-6
        py-24
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-6xl
          gap-6
          md:grid-cols-3
        "
      >

        <div
          className="
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            p-10
            text-center
            backdrop-blur-2xl
          "
        >

          <h2
            className="
              text-5xl
              font-black
              text-blue-400
            "
          >
            {stats.total}
          </h2>

          <p className="mt-4 text-slate-300">
            Total Pengaduan
          </p>

        </div>

        <div
          className="
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            p-10
            text-center
            backdrop-blur-2xl
          "
        >

          <h2
            className="
              text-5xl
              font-black
              text-blue-400
            "
          >
            {stats.completed}
          </h2>

          <p className="mt-4 text-slate-300">
            Pengaduan Selesai
          </p>

        </div>

        <div
          className="
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            p-10
            text-center
            backdrop-blur-2xl
          "
        >

          <h2
            className="
              text-5xl
              font-black
              text-blue-400
            "
          >
            {stats.totalUsers}
          </h2>

          <p className="mt-4 text-slate-300">
            Total Pengguna
          </p>

        </div>

      </div>

    </section>

  );

};