"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getAllComplaints,
} from "@/services/admin.service";

import {
  ComplaintTable,
} from "@/components/admin/complaint-table";

import {
  UpdateStatusModal,
} from "@/components/admin/update-status-modal";

import { Complaint } from "@/types/admin.type";

export default function ComplaintsPage() {
  const [
    complaints,
    setComplaints,
  ] = useState<
    Complaint[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [
    filterStatus,
    setFilterStatus,
  ] = useState("");

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const [
    modalOpen,
    setModalOpen,
  ] = useState(false);

  const [
    selectedId,
    setSelectedId,
  ] = useState("");

  const pageSize = 10;

  const fetchComplaints =
    async () => {
      try {
        const response =
          await getAllComplaints();

        setComplaints(
          response.data.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const filteredComplaints =
    useMemo(() => {
      return complaints
        .filter((item) =>
          item.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        )
        .filter((item) =>
          filterStatus
            ? item.status ===
              filterStatus
            : true
        );
    }, [
      complaints,
      search,
      filterStatus,
    ]);

  const paginatedComplaints =
    useMemo(() => {
      return filteredComplaints.slice(
        (currentPage - 1) *
          pageSize,

        currentPage *
          pageSize
      );
    }, [
      filteredComplaints,
      currentPage,
    ]);

  const totalPages =
    Math.ceil(
      filteredComplaints.length /
        pageSize
    );

  const openModal = (
    id: string
  ) => {
    setSelectedId(id);

    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedId("");

    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          Pengaduan 📄
        </h1>

        <p
          className="
            mt-2
            text-slate-400
          "
        >
          Kelola pengaduan
          warga desa.
        </p>
      </div>

      {/* FILTER */}
      <div
        className="
          flex
          flex-col
          gap-4
          rounded-[24px]
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-2xl
          md:flex-row
        "
      >
        <input
          type="text"
          placeholder="Cari pengaduan..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="
            h-12
            flex-1
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-4
            text-white
            outline-none
          "
        />

        <select
          value={filterStatus}
          onChange={(e) =>
            setFilterStatus(
              e.target.value
            )
          }
          className="
            h-12
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-4
            text-white
            outline-none
          "
        >
          <option value="">
            Semua Status
          </option>

          <option value="PENDING">
            Pending
          </option>

          <option value="PROCESS">
            Diproses
          </option>

          <option value="COMPLETED">
            Selesai
          </option>

          <option value="REJECTED">
            Ditolak
          </option>
        </select>
      </div>

      {/* TABLE */}
      {loading ? (
        <div
          className="
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            p-10
            text-white
          "
        >
          Loading...
        </div>
      ) : (
        <>
          <ComplaintTable
            complaints={
              paginatedComplaints
            }
            onUpdate={
              openModal
            }
          />

          {/* PAGINATION */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <button
              disabled={
                currentPage ===
                1
              }
              onClick={() =>
                setCurrentPage(
                  (
                    prev
                  ) =>
                    prev - 1
                )
              }
              className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-white
                disabled:opacity-40
              "
            >
              Prev
            </button>

            <div className="text-white">
              {currentPage} /{" "}
              {totalPages || 1}
            </div>

            <button
              disabled={
                currentPage ===
                totalPages
              }
              onClick={() =>
                setCurrentPage(
                  (
                    prev
                  ) =>
                    prev + 1
                )
              }
              className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-white
                disabled:opacity-40
              "
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* MODAL */}
      {modalOpen && (
        <UpdateStatusModal
          complaintId={
            selectedId
          }
          onClose={
            closeModal
          }
          onUpdated={
            fetchComplaints
          }
        />
      )}
    </div>
  );
}