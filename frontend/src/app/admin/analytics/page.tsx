"use client";

import { useEffect, useState } from "react";
import { getComplaintAnalytics } from "@/services/admin.service";
import { ComplaintChart } from "@/components/admin/complaint-chart";

export default function AnalyticsPage() {
  const [data, setData] = useState<
    { status: string; count: number }[]
  >([]);

  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    try {
      const res = await getComplaintAnalytics();
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">
        Analytics 📊
      </h1>
      <p className="text-slate-400">
        Visualisasi status pengaduan warga
      </p>

      {loading ? (
        <div className="text-white p-6 rounded-xl bg-white/5">
          Loading...
        </div>
      ) : (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
          <ComplaintChart data={data} />
        </div>
      )}
    </div>
  );
}