export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  data: {
    data: any;
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
      role: "USER" | "ADMIN";
    };
  };
};