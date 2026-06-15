"use client";

import { ReactNode } from "react";

import Link from "next/link";

import Cookies from "js-cookie";

import { useRouter } from "next/navigation";

export default function UserLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();

  const logout = () => {
    Cookies.remove("token");

    localStorage.removeItem(
      "pengaduan_user"
    );

    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* Sidebar */}

      <aside className="w-72 border-r border-white/10 bg-slate-900 p-6">

        <h1 className="mb-10 text-3xl font-black text-white">
          DesaCare
        </h1>

        <nav className="space-y-3">

          <Link
            href="/user/dashboard"
            className="block rounded-xl p-3 text-slate-300 hover:bg-white/10"
          >
            🏠 Dashboard
          </Link>

          <Link
            href="/user/complaint"
            className="block rounded-xl p-3 text-slate-300 hover:bg-white/10"
          >
            📝 Pengaduan Baru
          </Link>

          <Link
            href="/user/history"
            className="block rounded-xl p-3 text-slate-300 hover:bg-white/10"
          >
            📋 Riwayat
          </Link>

          <Link
            href="/user/profile"
            className="block rounded-xl p-3 text-slate-300 hover:bg-white/10"
          >
            👤 Profile
          </Link>

          <button
            onClick={logout}
            className="w-full rounded-xl bg-red-500 p-3 text-white"
          >
            Logout
          </button>

        </nav>

      </aside>

      {/* Content */}

      <main className="flex-1 p-10">

        {children}

      </main>

    </div>
  );
}