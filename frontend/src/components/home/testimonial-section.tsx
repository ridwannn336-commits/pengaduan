export const TestimonialSection =
  () => {
    const testimonials = [
      {
        name: "Ahmad",
        role: "Warga Desa",
        message:
          "Sangat membantu untuk melaporkan fasilitas desa yang rusak.",
      },

      {
        name: "Siti",
        role: "Masyarakat",
        message:
          "Proses pengaduan lebih cepat dan transparan.",
      },

      {
        name: "Budi",
        role: "Ketua RT",
        message:
          "Website modern dan mudah digunakan semua warga.",
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
              Testimoni 💬
            </h2>

            <p
              className="
                mt-4
                text-lg
                text-slate-400
              "
            >
              Pendapat masyarakat
              tentang sistem
              pengaduan desa.
            </p>
          </div>

          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-3
            "
          >
            {testimonials.map(
              (item) => (
                <div
                  key={
                    item.name
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
                  <div className="text-4xl">
                    💬
                  </div>

                  <p
                    className="
                      mt-6
                      leading-relaxed
                      text-slate-300
                    "
                  >
                    "
                    {
                      item.message
                    }
                    "
                  </p>

                  <div className="mt-8">
                    <h3
                      className="
                        text-lg
                        font-bold
                        text-white
                      "
                    >
                      {
                        item.name
                      }
                    </h3>

                    <p
                      className="
                        text-sm
                        text-slate-400
                      "
                    >
                      {
                        item.role
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    );
  };