export interface Complaint {
  id: string;
  title: string;
  description: string;
  image?: string;

  status:
    | "PENDING"
    | "PROCESS"
    | "COMPLETED"
    | "REJECTED";

  adminResponse?: string;

  createdAt: string;

  user: {
    id: string;
    name: string;
    email: string;
  };
}