const fakeUsers = [
  {
    id: "1",
    firstName: "erick",
    lastName: "garcia",
    email: "erick@hotmail.com",
    isLoggedIn: true,
  },
];

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

export const resolvers = {
  Query: {
    users: () => fakeUsers,
  },
  Mutation: {
    login: (parent: any, args: any) => {
      console.log("user received ? ", args);
      fakeUsers.push(args.user);
    },
  },
};
