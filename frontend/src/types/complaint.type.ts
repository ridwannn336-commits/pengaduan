export type Complaint = {
  id: string;
  title: string;
  description: string;
  image?: string;
  status:
    | "PENDING"
    | "PROCESS"
    | "COMPLETED"
    | "REJECTED";

  createdAt: string;

  user: {
    id: string;
    name: string;
    email: string;
  };
};

export type CreateComplaintPayload = {
  title: string;
  description: string;
  image?: FileList;
};

export type ComplaintResponse = {
  success: boolean;
  message: string;
  data: Complaint[];
};