import Link from "next/link";

export const CtaSection = () => {
  return (
    <section
      className="
        relative
        z-10
        px-6
        py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-5xl
          rounded-[32px]
          border
          border-white/10
          bg-gradient-to-r
          from-blue-500/10
          to-cyan-500/10
          p-14
          text-center
          backdrop-blur-2xl
        "
      >
        <h2
          className="
            text-4xl
            font-black
            text-white
          "
        >
          Suarakan Keluhan Anda
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-lg
            leading-relaxed
            text-slate-300
          "
        >
          Pemerintah desa siap
          mendengar dan membantu
          masyarakat secara
          transparan dan cepat.
        </p>

        <Link
          href="/complaint"
          className="
            mt-8
            inline-flex
            rounded-2xl
            bg-blue-500
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            transition-all
            hover:scale-105
            hover:bg-blue-400
          "
        >
          Buat Pengaduan
        </Link>
      </div>
    </section>
  );
};