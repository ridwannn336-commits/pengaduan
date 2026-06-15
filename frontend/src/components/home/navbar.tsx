"use client";

import Link from "next/link";

import Cookies from "js-cookie";

import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isLogin, setIsLogin] =
    useState(false);

  const [role, setRole] =
    useState("");

  useEffect(() => {
    const token =
      Cookies.get("token");

    const user =
      localStorage.getItem(
        "pengaduan_user"
      );

    setIsLogin(!!token);

    if (user) {
      const parsed =
        JSON.parse(user);

      setRole(parsed.role);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");

    localStorage.removeItem(
      "pengaduan_user"
    );

    window.location.href = "/";
  };

  return (
    <header
      className="
      fixed
      top-0
      left-0
      z-50
      w-full
      border-b
      border-white/10
      bg-slate-950/80
      backdrop-blur-xl
    "
    >
      <div
        className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between
        px-6
      "
      >
        <Link
          href="/"
          className="
          text-2xl
          font-black
          text-white
        "
        >
          DesaCare
        </Link>

        <nav
          className="
          flex
          items-center
          gap-3
        "
        >
          <Link
            href="/"
            className="text-slate-300 hover:text-white"
          >
            Home
          </Link>

          {!isLogin && (
            <>
              <Link
                href="/login"
                className="text-slate-300 hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="
                rounded-xl
                bg-blue-600
                px-4
                py-2
                text-white
              "
              >
                Register
              </Link>
            </>
          )}

          {isLogin &&
            role === "USER" && (
              <>
               <Link
                href="/user/dashboard"
                className="text-slate-300 hover:text-white"
              >
                Dashboard
                </Link>

                <Link
                  href="/user/complaint"
                  className="text-slate-300 hover:text-white"
                >
                  Pengaduan Baru
                </Link>

                <Link
                 href="/user/history"
                  className="text-slate-300 hover:text-white"
                >
                  Riwayat
                </Link>

                <Link
                  href="/user/profile"
                  className="text-slate-300 hover:text-white"
                >
                  Profile
                </Link>

                <button
                  onClick={
                    handleLogout
                  }
                  className="
                  rounded-xl
                  bg-red-500
                  px-4
                  py-2
                  text-white
                "
                >
                  Logout
                </button>
              </>
            )}

          {isLogin &&
            role === "ADMIN" && (
              <>
                <Link
                  href="/admin/dashboard"
                  className="text-slate-300 hover:text-white"
                >
                  Admin Dashboard
                </Link>

                <button
                  onClick={
                    handleLogout
                  }
                  className="
                  rounded-xl
                  bg-red-500
                  px-4
                  py-2
                  text-white
                "
                >
                  Logout
                </button>
              </>
            )}
        </nav>
      </div>
    </header>
  );
};