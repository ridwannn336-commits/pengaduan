"use client";

import {
  useState,
} from "react";
import { toast } from "sonner";
import { updateComplaintStatus } from "@/services/admin.service";

interface Props {
  complaintId: string;
  onClose: () => void;
  onUpdated: () => void;
}

export const UpdateStatusModal = ({
  complaintId,
  onClose,
  onUpdated,
}: Props) => {
  const [status, setStatus] =
    useState("PENDING");
  const [adminResponse, setAdminResponse] =
    useState("");

  const handleSubmit = async () => {
    try {
      await updateComplaintStatus(
        complaintId,
        {
          status,
          adminResponse,
        }
      );

      toast.success(
        "Status berhasil diperbarui"
      );

      onUpdated();
      onClose();
    } catch (err) {
      toast.error(
        "Gagal update status"
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white/5 rounded-2xl p-6 w-[400px] backdrop-blur-xl text-white">
        <h2 className="text-xl font-bold mb-4">
          Update Status
        </h2>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="w-full rounded-xl bg-white/10 p-2 mb-4"
        >
          <option value="PENDING">Pending</option>
          <option value="PROCESS">Diproses</option>
          <option value="COMPLETED">Selesai</option>
          <option value="REJECTED">Ditolak</option>
        </select>

        <textarea
          placeholder="Tanggapan admin (optional)"
          value={adminResponse}
          onChange={(e) =>
            setAdminResponse(e.target.value)
          }
          className="w-full rounded-xl bg-white/10 p-2 mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-white/10"
          >
            Batal
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-xl bg-blue-500/20"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};