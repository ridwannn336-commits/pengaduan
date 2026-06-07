export const StatsSection = () => {
  const stats = [
    {
      title: "120+",
      subtitle:
        "Pengaduan Terselesaikan",
    },
    {
      title: "98%",
      subtitle:
        "Respon Cepat",
    },
    {
      title: "24/7",
      subtitle:
        "Layanan Online",
    },
  ];

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
          grid
          max-w-6xl
          gap-6
          md:grid-cols-3
        "
      >
        {stats.map((item) => (
          <div
            key={item.title}
            className="
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              p-10
              text-center
              backdrop-blur-2xl
            "
          >
            <h2
              className="
                text-5xl
                font-black
                text-blue-400
              "
            >
              {item.title}
            </h2>

            <p
              className="
                mt-4
                text-slate-300
              "
            >
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};