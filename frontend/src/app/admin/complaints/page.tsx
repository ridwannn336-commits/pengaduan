"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getAllComplaints,
  updateComplaintStatus,
} from "@/services/admin.service";

type Complaint = {
  id: string;
  title: string;
  description: string;
  status: string;
  image?: string;
  adminResponse?: string;

  user: {
    name: string;
    email: string;
  };
};

export default function AdminComplaintsPage() {

  const [complaints, setComplaints] =
    useState<Complaint[]>([]);

    const [responses, setResponses] =
  useState<Record<string, string>>({});

  const [loading, setLoading] =
    useState(true);

  const fetchData = async () => {
  try {

    const data = await getAllComplaints();

    console.log("DATA =", data);

    setComplaints(
      Array.isArray(data) ? data : []
    );

  } catch (error) {

    console.log(error);

  } finally {

    setLoading(false);

  }
};

  useEffect(() => {

    fetchData();

  }, []);

  const handleStatusUpdate =
    async (
      id: string,
      status: string
    ) => {

      try {

        await updateComplaintStatus(
          id,
          {
            status,
          }
        );

        fetchData();

      } catch (error) {

        console.log(error);

      }

    };

const handleResponseSubmit =
  async (
    id: string
  ) => {

    try {

      await updateComplaintStatus(
        id,
        {
          status:
            complaints.find(
              (item) =>
                item.id === id
            )?.status ||
            "PENDING",

          adminResponse:
            responses[id],
        }
      );

      fetchData();

      alert(
        "Tanggapan berhasil disimpan"
      );

    } catch (error) {

      console.log(error);

    }

  };
console.log(complaints);
  return (

    <main className="min-h-screen bg-slate-950 p-8">

      <h1 className="mb-8 text-4xl font-bold text-white">

        Kelola Pengaduan

      </h1>

      {loading && (

        <p className="text-white">

          Loading...

        </p>

      )}

      <p className="text-white">
  Total complaint :
  {complaints.length}
</p>

      <div className="space-y-5">

        {complaints.map(
          (item) => (

            <div
              key={item.id}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
              "
            >

              <h2 className="text-2xl font-bold text-white">

                {item.title}

              </h2>

              <p className="mt-2 text-slate-400">
                {item.description}
              </p>

{item.image && (
  <div
    style={{
      width: "300px",
      height: "300px",
      marginTop: "16px",
    }}
  >
    <img
      src={`http://localhost:5000/uploads/complaints/${item.image}`}
      alt={item.title}
      style={{
        width: "300px",
        height: "100%",
        objectFit: "cover",
        borderRadius: "16px",
      }}
    />
  </div>
)} 

              <div className="mt-4 text-sm text-slate-400">

                Pelapor:
                {" "}
                {item.user.name}
                {" "}
                (
                {item.user.email}
                )

              </div>

              <div className="mt-4">

                <span
                  className="
                    rounded-xl
                    bg-blue-500/20
                    px-3
                    py-2
                    text-blue-300
                  "
                >
                  {item.status}
                </span>

              </div>

              <div className="mt-6 flex flex-wrap gap-3">

                <button
                  onClick={() =>
                    handleStatusUpdate(
                      item.id,
                      "PROCESS"
                    )
                  }
                  className="
                    rounded-xl
                    bg-yellow-600
                    px-4
                    py-2
                    text-white
                  "
                >
                  Process
                </button>

                <button
                  onClick={() =>
                    handleStatusUpdate(
                      item.id,
                      "COMPLETED"
                    )
                  }
                  className="
                    rounded-xl
                    bg-green-600
                    px-4
                    py-2
                    text-white
                  "
                >
                  Complete
                </button>

                <button
                  onClick={() =>
                    handleStatusUpdate(
                      item.id,
                      "REJECTED"
                    )
                  }
                  className="
                    rounded-xl
                    bg-red-600
                    px-4
                    py-2
                    text-white
                  "
                >
                  Reject
                </button>

              </div>

              <div className="mt-6">

                <textarea
                  placeholder="Tulis tanggapan admin..."
                  value={
                    responses[item.id] || ""
                  }
                  onChange={(e) =>
                    setResponses({
                      ...responses,
                      [item.id]:
                        e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-900
                    p-4
                    text-white
                  "
                />

                <button
                  onClick={() =>
                    handleResponseSubmit(
                      item.id
                    )
                  }
                  className="
                    mt-3
                    rounded-xl
                    bg-blue-600
                    px-4
                    py-2
                    text-white
                  "
                >
                  Simpan Tanggapan
                </button>

              </div>

            </div>

          )
        )}

      </div>

    </main>

  );

}