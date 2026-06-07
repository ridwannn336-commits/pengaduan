"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getAllComplaints,
} from "@/services/admin.service";

import { Complaint } from "@/types/admin.type";

export const RecentComplaints =
  () => {
    const [
      complaints,
      setComplaints,
    ] = useState<
      Complaint[]
    >([]);

    const fetchComplaints =
      async () => {
        try {
          const response =
            await getAllComplaints();

          setComplaints(
            response.data.data.slice(
              0,
              5
            )
          );
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
      fetchComplaints();
    }, []);

    return (
      <section>
        <div
          className="
            mb-5
            flex
            items-center
            justify-between
          "
        >
          <div>
            <h2
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              Pengaduan Terbaru
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-slate-400
              "
            >
              Data realtime
              pengaduan warga
            </p>
          </div>
        </div>

        <div
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
          "
        >
          {complaints.map(
            (item) => (
              <div
                key={item.id}
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  px-6
                  py-5
                  last:border-none
                "
              >
                <div>
                  <h3
                    className="
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-400
                    "
                  >
                    {
                      item.user
                        .name
                    }
                  </p>
                </div>

                <div
                  className="
                    rounded-full
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    px-4
                    py-2
                    text-xs
                    text-blue-300
                  "
                >
                  {item.status}
                </div>
              </div>
            )
          )}
        </div>
      </section>
    );
  };