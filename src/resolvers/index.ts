export const resolvers = {
  Query: {
    users: () => [
      {
        id: "1",
        firstName: "erick",
        lastName: "garcia",
        email: "erick@hotmail.com",
        isLoggedIn: true,
      },
    ],
  },
};
