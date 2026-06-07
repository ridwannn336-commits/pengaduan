export type Profile = {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  createdAt: string;
};

export type ProfileResponse = {
  success: boolean;
  message: string;
  data: Profile;
};

export type UpdateProfilePayload = {
  name?: string;
  email?: string;
};

export type ChangePasswordPayload = {
  currentPassword: string;
  newPassword: string;
};