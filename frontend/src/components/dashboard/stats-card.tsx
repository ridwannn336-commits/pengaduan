import { GlassCard } from "@/components/ui/glass-card";

type Props = {
  title: string;
  value: number;
};

export const StatsCard = ({
  title,
  value,
}: Props) => {
  return (
    <GlassCard className="p-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-400">
          {title}
        </p>

        <h2 className="text-3xl font-bold text-white">
          {value}
        </h2>
      </div>
    </GlassCard>
  );
};