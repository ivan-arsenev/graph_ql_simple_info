"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs_1 = __importDefault(require("./typeDefs"));
var resolvers_1 = __importDefault(require("./resolvers"));
var http_1 = __importDefault(require("http"));
// we create our Express server app object:
var app = express_1.default();
// subscribe (ask to be notified when changes occur) and publish (send a notification when changes occur).
var pubsub = new apollo_server_express_1.PubSub();
// makeExecutableSchema builds a programmatic schema from the combination
// of our typeDefs file and our resolvers file:
var schema = apollo_server_express_1.makeExecutableSchema({
    typeDefs: typeDefs_1.default, resolvers: resolvers_1.default
});
// create an instance of our GraphQL server:
var apolloServer = new apollo_server_express_1.ApolloServer({
    schema: schema,
    context: function (_a) {
        var req = _a.req, res = _a.res;
        return ({ req: req, res: res, pubsub: pubsub });
    }, // context is made up of the request and response objects of Express
});
// middleware, which for GraphQL is our Express server object called app.
apolloServer.applyMiddleware({ app: app, cors: false });
// use installSubscription Handlers function on server. Then, when we call
// listen, we are now calling listen on the httpServer object and not the app object:
var httpServer = http_1.default.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);
httpServer.listen({ port: 8000 }, function () {
    console.log("GraphQL server ready." +
        apolloServer.graphqlPath);
    console.log("GraphQL subs server ready." +
        apolloServer.subscriptionsPath);
});
