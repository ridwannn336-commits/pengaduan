export type CreateComplaintPayload = {
  title: string;
  description: string;
};

export type UpdateComplaintPayload = {
  title?: string;
  description?: string;
};