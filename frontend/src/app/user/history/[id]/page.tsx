"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "next/navigation";

import {
  getComplaintDetailService,
} from "@/services/complaint.service";

type Complaint = {
  id: string;
  title: string;
  description: string;
  status: string;
  image?: string;
  adminResponse?: string;
  createdAt: string;
};

export default function DetailComplaintPage() {

  const params =
    useParams();

  const [complaint, setComplaint] =
    useState<Complaint | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchDetail =
      async () => {

        try {

          const res =
            await getComplaintDetailService(
              String(params.id)
            );

          setComplaint(
            res.data
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    fetchDetail();

  }, [params.id]);

  if (loading) {

    return (
      <div className="min-h-screen bg-slate-950 pt-28 px-6 text-white">
        Loading...
      </div>
    );

  }

  if (!complaint) {

    return (
      <div className="min-h-screen bg-slate-950 pt-28 px-6 text-white">
        Data tidak ditemukan
      </div>
    );

  }

  return (

    <main className="min-h-screen bg-slate-950 pt-28 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-white">

          Detail Pengaduan

        </h1>

        <div
          className="
            mt-8
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
          "
        >

          <h2 className="text-3xl font-bold text-white">

            {complaint.title}

          </h2>

          <p className="mt-4 text-slate-300">

            {complaint.description}

          </p>

          <div className="mt-6">

            <span
              className="
                rounded-xl
                bg-blue-500/20
                px-4
                py-2
                text-blue-300
              "
            >
              {complaint.status}
            </span>

          </div>

          <div className="mt-6 text-slate-500">

            {new Date(
              complaint.createdAt
            ).toLocaleString("id-ID")}

          </div>

          {complaint.adminResponse && (

            <div
              className="
                mt-8
                rounded-2xl
                border
                border-green-500/20
                bg-green-500/10
                p-5
              "
            >

              <h3
                className="
                  text-lg
                  font-semibold
                  text-green-300
                "
              >
                Tanggapan Admin
              </h3>

              <p
                className="
                  mt-2
                  text-slate-300
                "
              >
                {complaint.adminResponse}
              </p>

            </div>

          )}

        </div>

      </div>

    </main>

  );

}