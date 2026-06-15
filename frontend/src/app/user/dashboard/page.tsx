"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getMyStatsService,
} from "@/services/complaint.service";

export default function UserDashboard() {

  const [stats, setStats] =
    useState({
      total: 0,
      pending: 0,
      process: 0,
      completed: 0,
      rejected: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchStats =
      async () => {

        try {

          const data =
            await getMyStatsService();

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
      <div className="min-h-screen bg-slate-950 pt-28 px-6 text-white">
        Loading...
      </div>
    );

  }

  return (
    <main className="min-h-screen bg-slate-950 pt-28 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-white">
          Dashboard User 👋
        </h1>

        <p className="mt-3 text-slate-400">
          Statistik pengaduan Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-10">

          <Card
            title="Total"
            value={stats.total}
          />

          <Card
            title="Pending"
            value={stats.pending}
          />

          <Card
            title="Process"
            value={stats.process}
          />

          <Card
            title="Completed"
            value={stats.completed}
          />

          <Card
            title="Rejected"
            value={stats.rejected}
          />

        </div>

      </div>

    </main>
  );

}

function Card({
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