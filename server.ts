import express from "express";
import { ApolloServer, makeExecutableSchema, PubSub } from
    "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import http from "http"
// we create our Express server app object:
const app = express();
// subscribe (ask to be notified when changes occur) and publish (send a notification when changes occur).
const pubsub = new PubSub();
// makeExecutableSchema builds a programmatic schema from the combination
// of our typeDefs file and our resolvers file:
const schema = makeExecutableSchema({
    typeDefs, resolvers
});
// create an instance of our GraphQL server:
const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res, pubsub }), // context is made up of the request and response objects of Express
});
// middleware, which for GraphQL is our Express server object called app.
apolloServer.applyMiddleware({ app, cors: false });
// use installSubscription Handlers function on server. Then, when we call
// listen, we are now calling listen on the httpServer object and not the app object:
const httpServer = http.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 8000 }, () => {
    console.log("GraphQL server ready." +
        apolloServer.graphqlPath);
    console.log("GraphQL subs server ready." +
        apolloServer.subscriptionsPath);
});