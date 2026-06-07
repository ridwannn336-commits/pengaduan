import Image from "next/image";

import { Complaint } from "@/types/complaint.type";

import { GlassCard } from "@/components/ui/glass-card";

type Props = {
  complaint: Complaint;
};

export const ComplaintCard = ({
  complaint,
}: Props) => {
  return (
    <GlassCard className="overflow-hidden">
      {complaint.image && (
        <div className="relative h-52 w-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL?.replace("/api/v1", "")}/uploads/complaints/${complaint.image}`}
            alt={complaint.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            {complaint.title}
          </h2>

          <span
            className="
              rounded-full
              bg-blue-600/20
              px-3
              py-1
              text-xs
              text-blue-400
            "
          >
            {complaint.status}
          </span>
        </div>

        <p className="text-sm text-slate-300">
          {complaint.description}
        </p>

        <div className="pt-2 text-xs text-slate-400">
          {complaint.user.name}
        </div>
      </div>
    </GlassCard>
  );
};