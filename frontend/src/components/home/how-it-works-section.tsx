export const HowItWorksSection =
  () => {
    const steps = [
      {
        number: "01",
        title:
          "Login / Register",
        description:
          "Warga membuat akun untuk mengakses sistem pengaduan desa.",
      },

      {
        number: "02",
        title:
          "Buat Pengaduan",
        description:
          "Isi formulir pengaduan dengan detail dan bukti pendukung.",
      },

      {
        number: "03",
        title:
          "Diproses Admin",
        description:
          "Admin desa akan meninjau dan memproses laporan warga.",
      },

      {
        number: "04",
        title:
          "Selesai",
        description:
          "Pengaduan selesai dan warga dapat melihat hasil tindak lanjut.",
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
            max-w-6xl
          "
        >
          <div className="text-center">
            <h2
              className="
                text-4xl
                font-black
                text-white
              "
            >
              Cara Kerja 🚀
            </h2>

            <p
              className="
                mt-4
                text-lg
                text-slate-400
              "
            >
              Proses pengaduan
              yang cepat dan
              transparan.
            </p>
          </div>

          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {steps.map(
              (item) => (
                <div
                  key={
                    item.number
                  }
                  className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    backdrop-blur-2xl
                  "
                >
                  <div
                    className="
                      text-5xl
                      font-black
                      text-blue-400
                    "
                  >
                    {
                      item.number
                    }
                  </div>

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-relaxed
                      text-slate-400
                    "
                  >
                    {
                      item.description
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    );
  };