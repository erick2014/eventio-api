export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

type SignUpUser = User & { password: string };

export type LoginInput = { email: string; password: string };
export type SignUpInput = Omit<SignUpUser, "id">;
