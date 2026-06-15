"use client";

import { useEffect, useState } from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import {
  getComplaintDetail,
  updateComplaintService,
} from "@/services/complaint.service";

import { toast } from "sonner";

export default function EditComplaintPage() {

  const params =
    useParams();

  const router =
    useRouter();

  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [loading, setLoading] =
    useState(true);

    const [image, setImage] =
  useState<File | null>(null);

  useEffect(() => {

    const fetchData =
      async () => {

        try {

          const data =
            await getComplaintDetail(
              String(params.id)
            );

          setTitle(
            data.title
          );

          setDescription(
            data.description
          );

        } catch (error) {

          console.log(error);

          toast.error(
            "Gagal mengambil data"
          );

        } finally {

          setLoading(false);

        }

      };

    fetchData();

  }, [params.id]);

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      try {

        const formData =
        new FormData();

        formData.append(
        "title",
        title
        );

        formData.append(
        "description",
        description
        );

        if (image) {
        formData.append(
            "image",
            image
        );
        }

        await updateComplaintService(
        String(params.id),
        formData
        );
        toast.success(
          "Pengaduan berhasil diperbarui"
        );

        router.push(
          "/user/history"
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Gagal update pengaduan"
        );

      }

    };

  if (loading) {

    return (
      <div className="min-h-screen bg-slate-950 pt-28 px-6 text-white">
        Loading...
      </div>
    );

  }

  return (
    <main className="min-h-screen bg-slate-950 pt-28 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-white">
          Edit Pengaduan
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-4
              text-white
            "
            placeholder="Judul"
          />

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            rows={6}
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-4
              text-white
            "
            placeholder="Deskripsi"
          />

                    <input
            type="file"
            accept="image/*"
            onChange={(e) =>
                setImage(
                e.target.files?.[0] || null
                )
            }
            className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-4
                text-white
            "
            />

          <button
            type="submit"
            className="
              rounded-xl
              bg-blue-600
              px-6
              py-3
              text-white
            "
          >
            Simpan Perubahan
          </button>

        </form>

      </div>

    </main>
  );

}