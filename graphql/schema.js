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
    getUser(email: String!): User!
    getSites: SiteData!
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
