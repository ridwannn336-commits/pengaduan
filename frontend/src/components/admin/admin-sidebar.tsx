"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: "📊",
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: "👥",
  },
  {
    title: "Complaints",
    href: "/admin/complaints",
    icon: "📄",
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: "📈",
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: "⚙️",
  },
];

export const AdminSidebar = () => {
  const pathname =
    usePathname();

  return (
    <aside
      className="
        sticky
        top-0
        hidden
        h-screen
        w-[280px]
        border-r
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-2xl
        lg:block
      "
    >
      <div className="mb-10">
        <h1
          className="
            text-2xl
            font-bold
          "
        >
          🏛️ Admin Desa
        </h1>

        <p
          className="
            mt-2
            text-sm
            text-slate-400
          "
        >
          Management System
        </p>
      </div>

      <div className="space-y-2">
        {menus.map((menu) => {
          const active =
            pathname ===
            menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`
                flex
                items-center
                gap-3
                rounded-2xl
                px-4
                py-3
                transition-all

                ${
                  active
                    ? `
                  bg-blue-600
                  text-white
                `
                    : `
                  text-slate-300
                  hover:bg-white/10
                `
                }
              `}
            >
              <span>
                {menu.icon}
              </span>

              <span>
                {menu.title}
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};