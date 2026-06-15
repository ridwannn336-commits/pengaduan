"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import {
  getProfile,
  updateProfile,
} from "@/services/profile.service";

export default function EditProfilePage() {

  const router = useRouter();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const data =
          await getProfile();

        setName(data.name);

        setEmail(data.email);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProfile();

  }, []);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const user =
        await updateProfile({

          name,

          email,

        });

      localStorage.setItem(
        "pengaduan_user",
        JSON.stringify(user)
      );

      toast.success(
        "Profile berhasil diperbarui"
      );

      router.push("/user/profile");

    } catch (error) {

      console.log(error);

      toast.error(
        "Gagal memperbarui profile"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <main className="min-h-screen bg-slate-950 pt-28 px-6">

      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="text-3xl font-bold text-white">

          Edit Profile

        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          <div>

            <label className="mb-2 block text-slate-300">

              Nama

            </label>

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
            />

          </div>

          <div>

            <label className="mb-2 block text-slate-300">

              Email

            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500"
          >

            {loading
              ? "Loading..."
              : "Simpan Perubahan"}

          </button>

        </form>

      </div>

    </main>

  );

}