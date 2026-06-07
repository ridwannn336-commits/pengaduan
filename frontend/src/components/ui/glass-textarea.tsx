import {
  TextareaHTMLAttributes,
} from "react";

type Props =
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export const GlassTextarea = ({
  ...props
}: Props) => {
  return (
    <textarea
      {...props}
      className="
        min-h-[120px]
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