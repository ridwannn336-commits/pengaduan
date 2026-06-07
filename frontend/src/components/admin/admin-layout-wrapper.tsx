"use client";

import { ReactNode } from "react";

import {
  AdminSidebar,
} from "./admin-sidebar";

import {
  AdminNavbar,
} from "./admin-navbar";

interface Props {
  children: ReactNode;
}

export const AdminLayoutWrapper = ({
  children,
}: Props) => {
  return (
    <main
      className="
        flex
        min-h-screen
        bg-slate-950
        text-white
      "
    >
      <AdminSidebar />

      <section className="flex-1">
        <AdminNavbar />

        <div className="p-6">
          {children}
        </div>
      </section>
    </main>
  );
};