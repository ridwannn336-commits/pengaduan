"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  FileText,
  Clock3,
  LoaderCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import {
  getDashboardStats,
} from "@/services/admin.service";

type DashboardStats = {
  total: number;
  pending: number;
  process: number;
  completed: number;
  rejected: number;
};

export default function AdminDashboardPage() {
  const [stats, setStats] =
    useState<DashboardStats>({
      total: 0,
      pending: 0,
      process: 0,
      completed: 0,
      rejected: 0,
    });

  const [loading, setLoading] =
    useState(true);

  const fetchStats =
    async () => {
      try {
        const response =
          await getDashboardStats();

        setStats(
          response.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchStats();
  }, []);

  const cards = [
    {
      title:
        "Total Pengaduan",
      value: stats.total,
      icon: FileText,
    },

    {
      title: "Pending",
      value: stats.pending,
      icon: Clock3,
    },

    {
      title: "Diproses",
      value: stats.process,
      icon: LoaderCircle,
    },

    {
      title: "Selesai",
      value: stats.completed,
      icon: CheckCircle2,
    },

    {
      title: "Ditolak",
      value: stats.rejected,
      icon: XCircle,
    },
  ];

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          Dashboard Admin 📊
        </h1>

        <p
          className="
            mt-2
            text-slate-400
          "
        >
          Statistik pengaduan
          desa secara realtime.
        </p>
      </div>

      {/* CARDS */}
      {loading ? (
        <div
          className="
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            p-10
            text-white
            backdrop-blur-2xl
          "
        >
          Loading dashboard...
        </div>
      ) : (
        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-5
          "
        >
          {cards.map(
            (
              card,
              index
            ) => {
              const Icon =
                card.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/5
                    p-6
                    backdrop-blur-2xl
                    transition-all
                    hover:scale-[1.02]
                    hover:border-blue-500/30
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-blue-500/10
                      to-transparent
                    "
                  />

                  <div className="relative z-10">
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
                      <Icon
                        className="
                          h-7
                          w-7
                          text-blue-400
                        "
                      />
                    </div>

                    <h2
                      className="
                        mt-5
                        text-slate-400
                      "
                    >
                      {card.title}
                    </h2>

                    <p
                      className="
                        mt-2
                        text-4xl
                        font-bold
                        text-white
                      "
                    >
                      {card.value}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}