"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { getComplaintDetail } from "@/services/complaint.service";

type Complaint = {
  id: string;
  title: string;
  description: string;
  image: string | null;
  status: string;
  adminResponse: string | null;
  createdAt: string;
};

export default function DetailHistoryPage() {

  const params = useParams();

  const [loading, setLoading] =
    useState(true);

  const [complaint, setComplaint] =
    useState<Complaint | null>(null);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const data =
          await getComplaintDetail(
            String(params.id)
          );

        setComplaint(data);

      } finally {

        setLoading(false);

      }

    };

    fetchData();

  }, []);

  if (loading) {

    return (

      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">

        Loading...

      </div>

    );

  }

  if (!complaint) {

    return (

      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">

        Data tidak ditemukan

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-slate-950 pt-28 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <h1 className="text-4xl font-bold text-white">

            {complaint.title}

          </h1>

          <div className="mt-6">

            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-300">

              {complaint.status}

            </span>

          </div>

          {complaint.adminResponse && (

              <div
                className="
                  mt-8
                  rounded-2xl
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  p-5
                "
              >

                <h3
                  className="
                    text-lg
                    font-semibold
                    text-blue-300
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
                  {
                    complaint.adminResponse
                  }
                </p>

              </div>

            )}

          <p className="mt-8 text-slate-300 leading-8">

            {complaint.description}

          </p>

          {complaint.image && (

            <img

              src={`http://localhost:5000/uploads/${complaint.image}`}

              className="mt-8 rounded-3xl"

            />

          )}

          <div className="mt-8 rounded-2xl bg-white/5 p-6">

            <h2 className="text-xl font-bold text-white">

              Respon Admin

            </h2>

            <p className="mt-3 text-slate-300">

              {complaint.adminResponse ||

                "Belum ada respon dari admin"}

            </p>

          </div>

          <div className="mt-8 text-slate-400">

            Dibuat pada

            {" "}

            {new Date(

              complaint.createdAt

            ).toLocaleString("id-ID")}

          </div>

        </div>

      </div>

    </div>

  );

}