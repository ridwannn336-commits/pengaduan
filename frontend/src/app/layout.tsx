import type { Metadata } from "next";

import "./globals.css";

import { Poppins } from "next/font/google";

import { QueryProvider } from "@/providers/query-provider";

import { ToastProvider } from "@/providers/toast-provider";

const poppins = Poppins({
  subsets: ["latin"],

  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],

  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default:
      "Pengaduan Desa",

    template:
      "%s | Pengaduan Desa",
  },

  description:
    "Platform digital modern untuk pengaduan masyarakat desa secara cepat, transparan, dan responsif.",

  keywords: [
    "pengaduan desa",
    "sistem desa",
    "pelaporan masyarakat",
    "desa digital",
    "pengaduan online",
  ],

  authors: [
    {
      name: "Pengaduan Desa",
    },
  ],

  creator:
    "Pengaduan Desa",

  metadataBase: new URL(
    "http://localhost:3000"
  ),

  openGraph: {
    title:
      "Pengaduan Desa",

    description:
      "Sistem pengaduan masyarakat desa modern.",

    type: "website",

    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
    >
      <body
        className={`
          ${poppins.variable}
          min-h-screen
          bg-slate-950
          font-sans
          text-white
          antialiased
        `}
      >
        {/* GLOBAL GRID BACKGROUND */}
        <div
          className="
            fixed
            inset-0
            -z-50
            bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
        />

        {/* GLOBAL BLUR */}
        <div
          className="
            fixed
            left-[-150px]
            top-[-150px]
            -z-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-600/20
            blur-3xl
          "
        />

        <div
          className="
            fixed
            bottom-[-150px]
            right-[-150px]
            -z-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-cyan-500/20
            blur-3xl
          "
        />

        <QueryProvider>
          <ToastProvider />

          {children}
        </QueryProvider>
      </body>
    </html>
  );
}