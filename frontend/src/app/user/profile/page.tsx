"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export default function ProfilePage() {

  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {

    const data =
      localStorage.getItem(
        "pengaduan_user"
      );

    if (data) {
      setUser(
        JSON.parse(data)
      );
    }

  }, []);

  return (

    <main className="min-h-screen bg-slate-950 pt-28 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-white">
          Profile 👤
        </h1>

        <p className="mt-3 text-slate-400">
          Informasi akun pengguna
        </p>

        <div
          className="
            mt-10
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
          "
        >

          <div className="flex justify-center">

            <div
              className="
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-5xl
                text-white
              "
            >
              👤
            </div>

          </div>

          <div className="mt-10 space-y-6">

            <div>

              <p className="text-slate-400">
                Nama
              </p>

              <h2 className="text-2xl font-bold text-white">
                {user?.name}
              </h2>

            </div>

            <div>

              <p className="text-slate-400">
                Email
              </p>

              <h2 className="text-xl text-white">
                {user?.email}
              </h2>

            </div>

            <div>

              <p className="text-slate-400">
                Role
              </p>

              <h2 className="text-xl text-white">
                {user?.role}
              </h2>

            </div>

          </div>

          <div className="mt-10 flex gap-4">

            <Link
              href="/profil/edit"
              className="
                rounded-2xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-500
              "
            >
              Edit Profile
            </Link>

            <Link
              href="/change-password"
              className="
                rounded-2xl
                bg-yellow-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-yellow-500
              "
            >
              Ganti Password
            </Link>

          </div>

        </div>

      </div>

    </main>

  );

}