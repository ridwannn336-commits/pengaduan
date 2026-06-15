"use client";

import { useEffect, useState } from "react";

import {
  getAllUsers,
} from "@/services/admin.service";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;

  _count: {
    complaints: number;
  };
};

export default function UsersPage() {

  const [users, setUsers] =
    useState<User[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchUsers =
      async () => {

        try {

          const data =
            await getAllUsers();

          setUsers(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    fetchUsers();

  }, []);

  if (loading) {

    return (

      <div className="p-8 text-white">
        Loading...
      </div>

    );

  }

  return (

    <main className="p-8">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          User Management
        </h1>

        <p className="mt-2 text-slate-400">
          Daftar seluruh pengguna sistem
        </p>

      </div>

      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
        "
      >

        <table className="w-full">

          <thead>

            <tr
              className="
                border-b
                border-white/10
                text-left
              "
            >

              <th className="p-4 text-white">
                Nama
              </th>

              <th className="p-4 text-white">
                Email
              </th>

              <th className="p-4 text-white">
                Role
              </th>

              <th className="p-4 text-white">
                Total Pengaduan
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="
                  border-b
                  border-white/5
                "
              >

                <td className="p-4 text-white">
                  {user.name}
                </td>

                <td className="p-4 text-slate-300">
                  {user.email}
                </td>

                <td className="p-4">

                  <span
                    className={`
                      rounded-xl
                      px-3
                      py-1
                      text-sm
                      font-medium
                      ${
                        user.role === "ADMIN"
                          ? "bg-red-500/20 text-red-300"
                          : "bg-blue-500/20 text-blue-300"
                      }
                    `}
                  >
                    {user.role}
                  </span>

                </td>

                <td className="p-4 text-white">
                  {user._count.complaints}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>

  );

}