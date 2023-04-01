export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isLoggedIn: boolean;
};

export type UserInput = Omit<User, "isLoggedIn" | "id">;
