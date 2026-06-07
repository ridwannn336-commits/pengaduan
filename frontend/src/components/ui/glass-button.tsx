import {
  ButtonHTMLAttributes,
} from "react";

type Props =
  ButtonHTMLAttributes<HTMLButtonElement>;

export const GlassButton = ({
  children,
  className = "",
  type = "button",
  ...props
}: Props) => {
  return (
    <button
      type={type}
      {...props}
      className={`
        relative
        z-10
        w-full
        rounded-2xl
        bg-blue-600
        px-4
        py-3
        font-medium
        text-white
        transition-all
        duration-300
        hover:bg-blue-500
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
};