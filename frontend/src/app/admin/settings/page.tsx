"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getDashboardStats,
} from "@/services/admin.service";

export default function SettingsPage() {

  const [totalUsers, setTotalUsers] =
    useState(0);

  useEffect(() => {

    const fetchData =
      async () => {

        try {

          const data =
            await getDashboardStats();

          setTotalUsers(
            data.totalUsers || 0
          );

        } catch (error) {

          console.log(error);

        }

      };

    fetchData();

  }, []);

  return (

    <main className="p-8">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Informasi sistem aplikasi
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
          "
        >
          <h2 className="text-xl font-bold text-white">
            Nama Aplikasi
          </h2>

          <p className="mt-3 text-slate-300">
            DesaCare - Sistem Pengaduan Masyarakat
          </p>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
          "
        >
          <h2 className="text-xl font-bold text-white">
            Versi Sistem
          </h2>

          <p className="mt-3 text-slate-300">
            Version 1.0.0
          </p>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
          "
        >
          <h2 className="text-xl font-bold text-white">
            Total User
          </h2>

          <p className="mt-3 text-4xl font-bold text-white">
            {totalUsers}
          </p>

          <p className="text-slate-400">
            User Terdaftar
          </p>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
          "
        >
          <h2 className="text-xl font-bold text-white">
            Developer
          </h2>

          <p className="mt-3 text-slate-300">
            Mohammad Ridwan
          </p>
        </div>

      </div>

    </main>

  );

}