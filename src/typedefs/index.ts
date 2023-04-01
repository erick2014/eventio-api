export const typeDefs = `#graphql
    type User{
        id: ID
        firstName: String
        lastName: String
        email: String
        isLoggedIn: Boolean
    }

    type Query {
        users: [User]
    }
`;
