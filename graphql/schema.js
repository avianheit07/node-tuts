const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
  }
  input UserInputData {
    email: String!
    name: String!
    password: String!
  }

  input SiteInputData {
    name: String!
    url: String!
  }
  type Site {
    id: ID!
    name: String!
    url: String!
  }

  type SiteData {
    sites: [Site!]!
    totalSites: Int!
  }

  type RootQuery {
<<<<<<< HEAD
    getUser(email: String!, password: String!): User!
=======
    getUser(email: String!): User!
    getSites: SiteData!
>>>>>>> ff39e7a819b958b9a954f4a9865d15c8cd37f3fc
  }

  type RootMutation {
    createUser(userInput: UserInputData): User!
    createSite(siteInput: SiteInputData): Site!
  }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
