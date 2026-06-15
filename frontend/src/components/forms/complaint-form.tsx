"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { motion } from "framer-motion";

import { GlassButton } from "@/components/ui/glass-button";

import { GlassCard } from "@/components/ui/glass-card";

import { GlassInput } from "@/components/ui/glass-input";

import { GlassTextarea } from "@/components/ui/glass-textarea";

import {
  CreateComplaintPayload,
} from "@/types/complaint.type";

import {
  useCreateComplaint,
} from "@/hooks/use-complaints";

export const ComplaintForm =
  () => {
    const router = useRouter();

    const { mutateAsync } =
      useCreateComplaint();

    const {
      register,
      handleSubmit,
    } =
      useForm<CreateComplaintPayload>();

    const onSubmit = async (
      values: CreateComplaintPayload
    ) => {
      try {
        await mutateAsync(values);

        router.push("/user/history");
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <GlassCard className="p-8">
          <form
            onSubmit={handleSubmit(
              onSubmit
            )}
            className="space-y-5"
          >
            <GlassInput
              type="text"
              placeholder="Judul Pengaduan"
              {...register("title")}
            />

            <GlassTextarea
              placeholder="Deskripsi Pengaduan"
              {...register(
                "description"
              )}
            />

            <input
              type="file"
              accept="image/*"
              {...register("image")}
              className="
                w-full
                rounded-2xl
                border
                border-dashed
                border-white/10
                bg-white/5
                p-4
                text-sm
                text-slate-300
              "
            />

            <GlassButton type="submit">
              Kirim Pengaduan
            </GlassButton>
          </form>
        </GlassCard>
      </motion.div>
    );
  };