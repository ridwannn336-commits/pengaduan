"use client";

import Link from "next/link";

import { ReactNode } from "react";

import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

const menus = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },

  {
    label: "Create",
    href:
      "/dashboard/create",
  },

  {
    label: "Profile",
    href:
      "/dashboard/profile",
  },
];

export const DashboardLayout =
  ({
    children,
  }: Props) => {
    const pathname =
      usePathname();

    return (
      <div
        className="
          min-h-screen
          bg-slate-950
        "
      >
        <aside
          className="
            fixed
            left-0
            top-0
            hidden
            h-screen
            w-72
            border-r
            border-white/10
            bg-white/5
            backdrop-blur-xl
            lg:block
          "
        >
          <div className="p-8">
            <h1 className="text-2xl font-bold text-white">
              Pengaduan Desa
            </h1>

            <nav className="mt-10 space-y-2">
              {menus.map(
                (menu) => (
                  <Link
                    key={
                      menu.href
                    }
                    href={
                      menu.href
                    }
                    className={`
                      block
                      rounded-2xl
                      px-4
                      py-3
                      text-sm
                      transition-all
                      ${
                        pathname ===
                        menu.href
                          ? "bg-blue-600 text-white"
                          : "text-slate-300 hover:bg-white/10"
                      }
                    `}
                  >
                    {menu.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </aside>

        <main className="lg:ml-72">
          {children}
        </main>
      </div>
    );
  };