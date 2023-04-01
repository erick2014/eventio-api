import { UserInput, User } from "./types";

const fakeUsers: User[] = [
  {
    id: "1",
    firstName: "erick",
    lastName: "garcia",
    email: "erick@hotmail.com",
    isLoggedIn: true,
  },
];

export const resolvers = {
  Query: {
    users: () => fakeUsers,
  },
  Mutation: {
    login: (parent: any, args: { user: UserInput }) => {
      console.log("user received ? ", args);
      const newRecord = { ...args.user, id: "1", isLoggedIn: true };
      fakeUsers.push(newRecord);
    },
  },
};
