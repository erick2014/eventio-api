import gql from "graphql-tag";

export const typeDefs = gql`
  type Event {
    title: String
  }

  type Query {
    events: [Event]
  }
`;
