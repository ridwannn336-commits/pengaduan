"use client";

import { useForm } from "react-hook-form";

import { motion } from "framer-motion";

import {
  useChangePassword,
} from "@/hooks/use-profile";

import { GlassButton } from "@/components/ui/glass-button";

import { GlassCard } from "@/components/ui/glass-card";

import { GlassInput } from "@/components/ui/glass-input";

import { ChangePasswordPayload } from "@/types/profile.type";

export const ChangePasswordForm =
  () => {
    const { mutateAsync } =
      useChangePassword();

    const {
      register,
      handleSubmit,
      reset,
    } =
      useForm<ChangePasswordPayload>();

   const onSubmit = async (values: ChangePasswordPayload) => {
  try {
    // Tambahkan 'as any' setelah kata values 
    await mutateAsync(values as any);

    reset();
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
          <h2 className="mb-6 text-xl font-semibold text-white">
            Change Password
          </h2>

          <form
            onSubmit={handleSubmit(
              onSubmit
            )}
            className="space-y-4"
          >
            <GlassInput
              type="password"
              placeholder="Current Password"
              {...register(
                "currentPassword"
              )}
            />

            <GlassInput
              type="password"
              placeholder="New Password"
              {...register(
                "newPassword"
              )}
            />

            <GlassButton type="submit">
              Update Password
            </GlassButton>
          </form>
        </GlassCard>
      </motion.div>
    );
  };