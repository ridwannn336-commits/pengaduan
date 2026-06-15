"use client";

import { useEffect, useState } from "react";

import {
  getHomeData
} from "@/services/public.service";

import { Complaint } from "@/types/admin.type";

export const RecentComplaintSection = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {

  const fetchData =
    async () => {

      try {

        const data =
          await getHomeData();

        setComplaints(
          data.complaints || []
        );

      } catch (error) {

        console.log(error);

      }

    };

  fetchData();

  const interval =
    setInterval(
      fetchData,
      5000
    );

  return () =>
    clearInterval(interval);

}, []);

  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span
            className="
              rounded-full
              bg-blue-600/20
              px-4
              py-2
              text-blue-300
            "
          >
            PENGADUAN TERBARU
          </span>

          <h2
            className="
              mt-5
              text-5xl
              font-bold
              text-white
            "
          >
            Laporan Masyarakat
          </h2>

          <p className="mt-4 text-slate-400">
            Pengaduan terbaru yang telah dikirim masyarakat.
          </p>

        </div>

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          {complaints.map((item) => (


            <div
              key={item.id}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >

              <img
 src={`http://localhost:5000/uploads/complaints/${item.image}`}
  alt={item.title}
  onError={(e) => {
    console.log("IMAGE ERROR:", item.image);

    e.currentTarget.src =
      "https://placehold.co/600x400?text=No+Image";
  }}
  className="
    h-56
    w-full
    object-cover
  "
/>

              <div className="p-6">

                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    text-slate-400
                  "
                >
                  {item.description}
                </p>

                <p
                  className="
                    mt-4
                    text-sm
                    text-blue-300
                  "
                >
                  Pelapor :
                  {" "}
                  {item.user.name}
                </p>

                <div className="mt-5">

                  <span
                    className="
                      rounded-full
                      bg-blue-600/20
                      px-4
                      py-2
                      text-sm
                      text-blue-300
                    "
                  >
                    {item.status}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};