"use client";

import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { motion } from "framer-motion";

import {
  useProfile,
  useUpdateProfile,
} from "@/hooks/use-profile";

import { GlassCard } from "@/components/ui/glass-card";

import { GlassInput } from "@/components/ui/glass-input";

import { GlassButton } from "@/components/ui/glass-button";

import { UpdateProfilePayload } from "@/types/profile.type";

export const ProfileForm = () => {
  const { data } =
    useProfile();

  const { mutateAsync } =
    useUpdateProfile();

  const {
    register,
    handleSubmit,
    reset,
  } =
    useForm<UpdateProfilePayload>();

  useEffect(() => {
    if (data?.data) {
      reset({
        name: data.data.name,
        email:
          data.data.email,
      });
    }
  }, [data, reset]);

  const onSubmit = async (
    values: UpdateProfilePayload
  ) => {
    try {
      await mutateAsync(values);
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
        <div className="mb-6 flex items-center gap-4">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-blue-600
              text-2xl
              font-bold
              text-white
            "
          >
            {data?.data.name
              ?.charAt(0)
              .toUpperCase()}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              {
                data?.data
                  .name
              }
            </h2>

            <p className="text-sm text-slate-400">
              {
                data?.data
                  .role
              }
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="space-y-4"
        >
          <GlassInput
            type="text"
            placeholder="Name"
            {...register("name")}
          />

          <GlassInput
            type="email"
            placeholder="Email"
            {...register(
              "email"
            )}
          />

          <GlassButton type="submit">
            Update Profile
          </GlassButton>
        </form>
      </GlassCard>
    </motion.div>
  );
};