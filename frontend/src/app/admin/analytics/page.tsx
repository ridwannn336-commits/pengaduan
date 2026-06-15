"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  getComplaintAnalytics,
} from "@/services/admin.service";

const COLORS = [
  "#3b82f6",
  "#f59e0b",
  "#10b981",
  "#ef4444",
];

export default function AnalyticsPage() {

  const [data, setData] =
    useState<any[]>([]);

  useEffect(() => {

    const fetchData =
      async () => {

        try {

          const result =
            await getComplaintAnalytics();

          setData(result);

        } catch (error) {

          console.log(error);

        }

      };

    fetchData();

  }, []);

  return (

    <main className="min-h-screen bg-slate-950 p-8">

      <h1
        className="
          mb-8
          text-4xl
          font-bold
          text-white
        "
      >
        Analytics
      </h1>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >

        <div
          className="
            h-[450px]
          "
        >

          <ResponsiveContainer>

            <PieChart>

              <Pie
                data={data}
                dataKey="count"
                nameKey="status"
                outerRadius={150}
                label
              >

                {data.map(
                  (
                    entry,
                    index
                  ) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />

                  )
                )}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </main>

  );

}