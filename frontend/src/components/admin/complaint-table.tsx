"use client";

import { Complaint } from "@/types/admin.type";

interface Props {
  complaints: Complaint[];

  onUpdate: (
    id: string
  ) => void;
}

export const ComplaintTable = ({
  complaints,
  onUpdate,
}: Props) => {
  return (
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
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr
              className="
                border-b
                border-white/10
                bg-white/5
                text-left
              "
            >
              <th className="p-5 text-sm font-semibold text-slate-300">
                Judul
              </th>

              <th className="p-5 text-sm font-semibold text-slate-300">
                Pelapor
              </th>

              <th className="p-5 text-sm font-semibold text-slate-300">
                Status
              </th>

              <th className="p-5 text-sm font-semibold text-slate-300">
                Tanggal
              </th>

              <th className="p-5 text-sm font-semibold text-slate-300">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {complaints.map(
              (item) => (
                <tr
                  key={item.id}
                  className="
                    border-b
                    border-white/5
                    transition-all
                    hover:bg-white/5
                  "
                >
                  <td className="p-5 text-white">
                    {item.title}
                  </td>

                  <td className="p-5 text-slate-300">
                    {
                      item.user
                        .name
                    }
                  </td>

                  <td className="p-5">
                    <span
                      className={`
                        rounded-full
                        px-4
                        py-2
                        text-xs
                        font-medium

                        ${
                          item.status ===
                          "PENDING"
                            ? `
                          bg-yellow-500/10
                          text-yellow-300
                        `
                            : ""
                        }

                        ${
                          item.status ===
                          "PROCESS"
                            ? `
                          bg-blue-500/10
                          text-blue-300
                        `
                            : ""
                        }

                        ${
                          item.status ===
                          "COMPLETED"
                            ? `
                          bg-green-500/10
                          text-green-300
                        `
                            : ""
                        }

                        ${
                          item.status ===
                          "REJECTED"
                            ? `
                          bg-red-500/10
                          text-red-300
                        `
                            : ""
                        }
                      `}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-5 text-slate-400">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-5">
                    <button
                      onClick={() =>
                        onUpdate(
                          item.id
                        )
                      }
                      className="
                        rounded-xl
                        bg-blue-500/20
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-blue-300
                        transition-all
                        hover:bg-blue-500/30
                      "
                    >
                      Update
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};