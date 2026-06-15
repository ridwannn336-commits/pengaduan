"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getDashboardStats,
} from "@/services/admin.service";

type Stats = {
  total: number;
  pending: number;
  process: number;
  completed: number;
  rejected: number;
  totalUsers: number;
};

export default function AdminDashboardPage() {

  const [stats, setStats] =
    useState<Stats>({
      total: 0,
      pending: 0,
      process: 0,
      completed: 0,
      rejected: 0,
      totalUsers: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchStats =
      async () => {

        try {

          const data =
            await getDashboardStats();

          setStats(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    fetchStats();

  }, []);

  if (loading) {

    return (
      <div className="p-8">
        Loading...
      </div>
    );

  }

  return (

    <main className="min-h-screen bg-slate-950 p-8">

      <h1 className="mb-8 text-4xl font-bold text-white">
        Dashboard Admin
      </h1>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
        "
      >

        <StatCard
          title="Total Pengaduan"
          value={stats.total}
        />

        <StatCard
          title="Pending"
          value={stats.pending}
        />

        <StatCard
          title="Process"
          value={stats.process}
        />

        <StatCard
          title="Completed"
          value={stats.completed}
        />

        <StatCard
          title="Rejected"
          value={stats.rejected}
        />

        <StatCard
          title="Total User"
          value={stats.totalUsers}
        />

      </div>

    </main>

  );

}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {

  return (

        <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
      "
    >

      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-white">
        {value}
      </h2>

    </div>

  );

}