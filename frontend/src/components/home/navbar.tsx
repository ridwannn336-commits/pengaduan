"use client";

import Link from "next/link";

import Cookies from "js-cookie";

import {
  useEffect,
  useState,
} from "react";

export const Navbar = () => {
  const [isLogin, setIsLogin] =
    useState(false);

  useEffect(() => {
    const token =
      Cookies.get("token");

    setIsLogin(!!token);
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
        left-0
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-slate-950/70
        backdrop-blur-2xl
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
            className="
              rounded-xl
              px-4
              py-2
              text-sm
              text-slate-300
              transition-all
              hover:bg-white/10
              hover:text-white
            "
          >
            Home
          </Link>

          <Link
            href={
              isLogin
                ? "/complaint"
                : "/login"
            }
            className="
              rounded-xl
              px-4
              py-2
              text-sm
              text-slate-300
              transition-all
              hover:bg-white/10
              hover:text-white
            "
          >
            Pengaduan
          </Link>

          {!isLogin ? (
            <>
              <Link
                href="/login"
                className="
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  text-slate-300
                  transition-all
                  hover:bg-white/10
                  hover:text-white
                "
              >
                Login
              </Link>

              <Link
                href="/register"
                className="
                  rounded-2xl
                  bg-blue-500
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  hover:bg-blue-400
                "
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={
                handleLogout
              }
              className="
                rounded-2xl
                bg-red-500/20
                px-5
                py-2
                text-sm
                font-medium
                text-red-300
                transition-all
                hover:bg-red-500/30
              "
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};