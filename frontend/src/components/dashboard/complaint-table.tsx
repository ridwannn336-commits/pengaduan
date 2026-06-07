"use client";

import { useState } from "react";

import { Complaint } from "@/types/complaint.type";

import { useUpdateComplaintStatus } from "@/hooks/use-admin";

import { GlassCard } from "@/components/ui/glass-card";

import { StatusBadge } from "@/components/ui/status-badge";

type Props = {
  complaints: Complaint[];
};

export const ComplaintTable = ({
  complaints,
}: Props) => {
  const [loadingId, setLoadingId] =
    useState("");

  const { mutateAsync } =
    useUpdateComplaintStatus();

  const updateStatus = async (
    id: string,
    status:
      | "PENDING"
      | "PROCESS"
      | "COMPLETED"
      | "REJECTED"
  ) => {
    try {
      setLoadingId(id);

      await mutateAsync({
        id,

        payload: {
          status,
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingId("");
    }
  };

  return (
    <GlassCard className="overflow-x-auto p-6">
      <table className="w-full min-w-[900px]">
        <thead>
          <tr className="border-b border-white/10 text-left">
            <th className="pb-4 text-sm text-slate-400">
              Title
            </th>

            <th className="pb-4 text-sm text-slate-400">
              User
            </th>

            <th className="pb-4 text-sm text-slate-400">
              Status
            </th>

            <th className="pb-4 text-sm text-slate-400">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {complaints.map(
            (complaint) => (
              <tr
                key={
                  complaint.id
                }
                className="border-b border-white/5"
              >
                <td className="py-5 text-white">
                  {
                    complaint.title
                  }
                </td>

                <td className="py-5 text-slate-300">
                  {
                    complaint.user
                      .name
                  }
                </td>

                <td className="py-5">
                  <StatusBadge
                    status={
                      complaint.status
                    }
                  />
                </td>

                <td className="py-5">
                  <select
                    disabled={
                      loadingId ===
                      complaint.id
                    }
                    onChange={(e) =>
                      updateStatus(
                        complaint.id,
                        e.target
                          .value as
                          | "PENDING"
                          | "PROCESS"
                          | "COMPLETED"
                          | "REJECTED"
                      )
                    }
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-slate-900
                      px-3
                      py-2
                      text-sm
                      text-white
                    "
                    defaultValue={
                      complaint.status
                    }
                  >
                    <option value="PENDING">
                      PENDING
                    </option>

                    <option value="PROCESS">
                      PROCESS
                    </option>

                    <option value="COMPLETED">
                      COMPLETED
                    </option>

                    <option value="REJECTED">
                      REJECTED
                    </option>
                  </select>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </GlassCard>
  );
};