"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";

import { toast } from "sonner";

import { setToken } from "@/lib/token";

import {
  loginValidation,
} from "@/validations/auth.validation";

import {
  loginService,
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
  LoginPayload,
} from "@/types/auth.type";

export const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting,
    },
  } = useForm<LoginPayload>({
    resolver:
      zodResolver(
        loginValidation
      ),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (
    values: LoginPayload
  ) => {
    try {
      const response =
        await loginService(
          values
        );

      console.log(
        response.data
      );

      // SUPPORT BOTH:
      // response.data.data
      // response.data

      const responseData =
        response.data.data ||
        response.data;

      const token =
        responseData.token;

      const user =
        responseData.user;

      if (
        !token ||
        !user
      ) {
        throw new Error(
          "Invalid response structure"
        );
      }

      // ROLE BASED REDIRECT

const role = String(user.role).toUpperCase();

// simpan token
setToken(token);

// simpan user
localStorage.setItem(
  "pengaduan_user",
  JSON.stringify(user)
);

toast.success("Login berhasil");

// redirect berdasarkan role
setTimeout(() => {
  if (role === "ADMIN") {
    router.push("/admin/dashboard");
  } else {
    router.push("/user/dashboard");
  }
}, 500);


    } catch (error: any) {
      console.log(error);

      toast.error(
        error?.response?.data
          ?.message ||
          error?.message ||
          "Login gagal"
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
                🏛️
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Selamat Datang
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Login ke sistem
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
                : "Login"}
            </GlassButton>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Belum punya akun?{" "}

              <Link
                href="/register"
                className="
                  font-medium
                  text-blue-400
                  transition-all
                  hover:text-blue-300
                "
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};