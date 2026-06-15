"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getAllComplaints,
} from "@/services/admin.service";

type Complaint = {
  id: string;
  title: string;
  status: string;
  image?: string;
};

export const RecentComplaints =
  () => {

    const [
      complaints,
      setComplaints,
    ] = useState<
      Complaint[]
    >([]);

    useEffect(() => {

      const fetchData =
        async () => {

          try {

            const data =
              await getAllComplaints();

            setComplaints(
              data.slice(0, 6)
            );

          } catch (error) {

            console.log(error);

          }

        };

      fetchData();

    }, []);

    return (

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-10 text-center text-4xl font-bold text-white">

            Pengaduan Terbaru

          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {complaints.map(
              (item) => (

                <div
                  key={item.id}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                  "
                >

                  <img
                    src={`http://localhost:5000/uploads/complaints/${item.image}`}
                    className="
                      h-52
                      w-full
                      rounded-xl
                      object-cover
                    "
                  />

                  <h3 className="mt-4 text-xl font-bold text-white">

                    {item.title}

                  </h3>

                  <p className="mt-2 text-blue-400">

                    {item.status}

                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>

    );

  };