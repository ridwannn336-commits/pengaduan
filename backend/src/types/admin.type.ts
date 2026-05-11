export type UpdateComplaintStatusPayload =
  {
    status:
      | "PENDING"
      | "PROCESS"
      | "COMPLETED"
      | "REJECTED";

    adminResponse?: string;
  };