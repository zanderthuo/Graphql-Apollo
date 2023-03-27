import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/type-defs.js'
import { resolvers } from './schema/resolvers.js'

/**
 * @def : ApolloServer class will take two inputs: typeDefs, resolvers
 * @resolvers : Functions that deal with data
 * @typeDefs : Used to define types
 */
const server = new ApolloServer({ typeDefs, resolvers })


server.listen().then(({ url }) => {
    console.log(`Your API is Running @ ${url}`)
})