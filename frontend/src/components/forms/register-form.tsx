"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";

import { toast } from "sonner";

import { setToken } from "@/lib/token";

import {
  registerValidation,
} from "@/validations/auth.validation";

import {
  registerService,
} from "@/services/auth.service";

import {
  GlassButton,
} from "@/components/ui/glass-button";

import {
  GlassCard,
} from "@/components/ui/glass-card";

import {
  GlassInput,
} from "@/components/ui/glass-input";

import {
  RegisterPayload,
} from "@/types/auth.type";

export const RegisterForm =
  () => {
    const router = useRouter();

    const {
      register,
      handleSubmit,
      formState: {
        isSubmitting,
      },
    } =
      useForm<RegisterPayload>({
        resolver:
          zodResolver(
            registerValidation
          ),

        defaultValues: {
          name: "",
          email: "",
          password: "",
        },
      });

    const onSubmit = async (
      values: RegisterPayload
    ) => {
      try {
        await registerService(
          values
        );

        toast.success(
          "Akun berhasil dibuat"
        );

        router.push(
          "/login?registered=true"
        );
      } catch (error: any) {
        toast.error(
          error?.response?.data
            ?.message ||
            "Register gagal"
        );
      }
    };

    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <GlassCard
          className="
            relative
            overflow-hidden
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-2xl
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-blue-500/10
              to-transparent
            "
          />

          <div className="relative z-10">
            <div className="mb-8 text-center">
              <div
                className="
                  mx-auto
                  mb-4
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-600/20
                  backdrop-blur-xl
                "
              >
                <span className="text-3xl">
                  📝
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white">
                Buat Akun
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Daftar ke sistem
                pengaduan desa
              </p>
            </div>

            <form
              onSubmit={handleSubmit(
                onSubmit
              )}
              className="space-y-5"
            >
              <div className="space-y-2">
                <label className="text-sm text-slate-300">
                  Nama
                </label>

                <GlassInput
                  type="text"
                  placeholder="Masukkan nama"
                  {...register(
                    "name"
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">
                  Email
                </label>

                <GlassInput
                  type="email"
                  placeholder="Masukkan email"
                  {...register(
                    "email"
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">
                  Password
                </label>

                <GlassInput
                  type="password"
                  placeholder="Masukkan password"
                  {...register(
                    "password"
                  )}
                />
              </div>

              <GlassButton
                type="submit"
                className="
                  h-12
                  w-full
                  text-base
                  font-semibold
                "
              >
                {isSubmitting
                  ? "Loading..."
                  : "Register"}
              </GlassButton>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-400">
                Sudah punya akun?{" "}

                <Link
                  href="/login"
                  className="
                    font-medium
                    text-blue-400
                    transition-all
                    hover:text-blue-300
                  "
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    );
  };