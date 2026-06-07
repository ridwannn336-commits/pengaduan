interface Props {
  title: string;
  value: string;
  icon: string;
}

export const StatsCard = ({
  title,
  value,
  icon,
}: Props) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-2xl
        transition-all
        hover:-translate-y-1
        hover:bg-white/10
      "
    >
      <div
        className="
          absolute
          right-[-30px]
          top-[-30px]
          h-[120px]
          w-[120px]
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-between
        "
      >
        <div>
          <p
            className="
              text-sm
              text-slate-400
            "
          >
            {title}
          </p>

          <h3
            className="
              mt-3
              text-4xl
              font-bold
            "
          >
            {value}
          </h3>
        </div>

        <div className="text-5xl">
          {icon}
        </div>
      </div>
    </div>
  );
};