export const FooterSection =
  () => {
    return (
      <footer
        className="
          border-t
          border-white/10
          py-8
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-6
            md:flex-row
          "
        >
          <div>
            <h2 className="text-lg font-semibold text-white">
              Pengaduan Desa
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Sistem pengaduan masyarakat modern.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 Pengaduan Desa. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };