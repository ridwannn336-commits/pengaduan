import { InputHTMLAttributes } from "react";

type Props =
  InputHTMLAttributes<HTMLInputElement>;

export const GlassInput = ({
  ...props
}: Props) => {
  return (
    <input
      {...props}
      className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-4
        py-3
        text-sm
        text-white
        outline-none
        backdrop-blur-lg
        placeholder:text-gray-400
        focus:border-blue-500
      "
    />
  );
};