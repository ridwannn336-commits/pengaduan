"use client";

export const AdminNavbar = () => {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-20
        items-center
        justify-between
        border-b
        border-white/10
        bg-slate-950/70
        px-6
        backdrop-blur-2xl
      "
    >
      <div>
        <h2
          className="
            text-2xl
            font-bold
          "
        >
          Admin Dashboard
        </h2>

        <p
          className="
            text-sm
            text-slate-400
          "
        >
          Sistem Pengaduan Desa
        </p>
      </div>

      <button
        className="
          rounded-2xl
          bg-red-500/10
          px-5
          py-2
          text-red-300
          transition-all
          hover:bg-red-500/20
        "
      >
        Logout
      </button>
    </header>
  );
};