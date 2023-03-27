import { gql } from 'apollo-server';

export const typeDefs = gql `
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Item {
    name: String!
    price: Float!
  }

  type Order {
    id: ID!
    deliveryAddress: String!
    items: [Item!]!
    total: Float!
    discountCode: String
    comment: String
    status: Status
  }

  type HolidayOffer {
    id: Int!
    name: String!
    visitedCount: Int!
    price: String!
    imageUrl: String!
    description: String
    dateAdded: String!
  }


type Query {
    users: [User!] !
    user(id: ID!): User!
    movies: [Movie!] !
    movie(name: String): Movie!
    orders: [Order!] !
    order(status: Status): Order!
    orderById(id: String!): Order
    holidayOffers(first: Int, orderBy: String): [HolidayOffer!]!
}

input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
}

input UpdateUsernameInput {
    id: ID!
    newUsername: String!
}

type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
    markVisited(id: Int!): HolidayOffer
    updateStatus(id: ID!, status: Status!): Order!
}

enum Nationality {
    KENYAN
    UGANDAN
    TANZANIAN
}

enum Status {
    PENDING
    PAID
    IN_PROGRESS
    IN_DELIVERY
    DELIVERED
}

`;