import { gql } from "apollo-server-express";

// Type definitions are used by Apollo GraphQL to describe the schema types in a schema
// file.Before your server can start providing any GraphQL data, it must first have a
// complete schema file that lists all of your application's types, their fields, and queries that
// will be served in its API.
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
    }

    type Todo {
        id: ID!
        title: String!
        description: String
    }
    type Query {
        getUser(id: ID) : User
        getTodos: [Todo]
    }
    type Mutation {
        addTodo(title: String!, description: String): Todo
    }
    type Subscription {
        newTodo: Todo!
    }
`

export default typeDefs