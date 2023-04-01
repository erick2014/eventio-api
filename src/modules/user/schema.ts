import gql from "graphql-tag";

export const typeDefs = gql`
  input UserInputParams {
    firstName: String
    lastName: String
    email: String
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    isLoggedIn: Boolean
  }

  type Query {
    users: [User]
  }

  type Mutation {
    login(user: UserInputParams): User
  }
`;
