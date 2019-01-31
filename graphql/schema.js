const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String
  }
  input UserInputData {
    email: String!
    name: String!
    password: String!
  }

  type RootMutation {
    createUser(userInput: UserInputData): User!
  }

  type RootQuery {
    getUser(email: String!): User!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
