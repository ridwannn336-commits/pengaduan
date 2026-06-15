"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import { toast } from "sonner";

import {
 getMyComplaintsService,
  deleteComplaintService,
} from "@/services/complaint.service";

type Complaint = {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
};

export default function HistoryPage() {
  const [complaints, setComplaints] =
    useState<Complaint[]>([]);

  const [loading, setLoading] =
    useState(true);

  const fetchData = async () => {
    try {
      const res =
  await getMyComplaintsService();

    console.log(
      "COMPLAINT RESPONSE:",
      res
    );

        setComplaints(
      Array.isArray(res)
        ? res
        : []
    );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (
    id: string
  ) => {
    const confirmDelete =
      window.confirm(
        "Yakin ingin menghapus pengaduan ini?"
      );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteComplaintService(
        id
      );

      toast.success(
        "Pengaduan berhasil dihapus"
      );

      fetchData();
    } catch (error) {
      console.log(error);

      toast.error(
        "Gagal menghapus pengaduan"
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 pt-28 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-white">
          Riwayat Pengaduan
        </h1>

        <p className="mt-3 text-slate-400">
          Seluruh laporan yang pernah Anda buat
        </p>

        <div className="mt-10 space-y-5">

          {loading && (
            <div className="rounded-3xl bg-white/5 p-8 text-white">
              Loading...
            </div>
          )}

          {!loading &&
            complaints.map((item) => (

              <div
                key={item.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >

                <div className="flex justify-between">

                  <div>

                    <h2 className="text-2xl font-bold text-white">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                  <span className="rounded-xl bg-blue-500/20 px-4 py-2 text-blue-300 h-fit">
                    {item.status}
                  </span>

                </div>

                <div className="mt-6 flex items-center justify-between">

                  <div className="text-sm text-slate-500">
                    {new Date(
                      item.createdAt
                    ).toLocaleString("id-ID")}
                  </div>

                <div className="flex gap-3">

                  <Link
                    href={`/user/history/${item.id}`}
                    className="
                      rounded-xl
                      bg-blue-600
                      px-4
                      py-2
                      text-white
                      transition
                      hover:bg-blue-500
                    "
                  >
                    Detail
                  </Link>

                 <Link
                  href={`/user/history/edit/${item.id}`}
                  className="
                    rounded-xl
                    bg-yellow-600
                    px-4
                    py-2
                    text-white
                    transition
                    hover:bg-yellow-500
                  "
                >
                  Edit
                </Link>

                  <button
                    onClick={() =>
                      handleDelete(item.id)
                    }
                    className="
                      rounded-xl
                      bg-red-600
                      px-4
                      py-2
                      text-white
                      transition
                      hover:bg-red-500
                    "
                  >
                    Hapus
                  </button>

                </div>

                </div>

              </div>

            ))}

          {!loading &&
            complaints.length === 0 && (

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-slate-400">

                Belum ada pengaduan.

              </div>

            )}

        </div>

      </div>

    </main>
  );
}