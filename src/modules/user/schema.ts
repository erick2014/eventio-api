import gql from "graphql-tag";

export const typeDefs = gql`
  input LoginInput {
    email: String!
    password: String!
  }

  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    users: [User]
    login(user: LoginInput): User
  }

  type Mutation {
    signup(user: SignUpInput): User
  }
`;
