import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const GlassCard = ({
  children,
  className = "",
}: Props) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};