"use client";

import {
  ComplaintForm,
} from "@/components/forms/complaint-form";

export default function ComplaintPage() {
  return (
    <main
      className="
        min-h-screen
        bg-slate-950
        px-4
        py-10
      "
    >
      <div
        className="
          mx-auto
          max-w-3xl
        "
      >
        <div className="mb-8">
          <h1
            className="
              text-4xl
              font-bold
              text-white
            "
          >
            Buat Pengaduan 📢
          </h1>

          <p
            className="
              mt-2
              text-slate-400
            "
          >
            Laporkan masalah desa
            dengan cepat dan transparan.
          </p>
        </div>

        <ComplaintForm />
      </div>
    </main>
  );
}