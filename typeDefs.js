"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
// Type definitions are used by Apollo GraphQL to describe the schema types in a schema
// file.Before your server can start providing any GraphQL data, it must first have a
// complete schema file that lists all of your application's types, their fields, and queries that
// will be served in its API.
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type User {\n        id: ID!\n        username: String!\n        email: String!\n    }\n\n    type Todo {\n        id: ID!\n        title: String!\n        description: String\n    }\n    type Query {\n        getUser(id: ID) : User\n        getTodos: [Todo]\n    }\n    type Mutation {\n        addTodo(title: String!, description: String): Todo\n    }\n    type Subscription {\n        newTodo: Todo!\n    }\n"], ["\n    type User {\n        id: ID!\n        username: String!\n        email: String!\n    }\n\n    type Todo {\n        id: ID!\n        title: String!\n        description: String\n    }\n    type Query {\n        getUser(id: ID) : User\n        getTodos: [Todo]\n    }\n    type Mutation {\n        addTodo(title: String!, description: String): Todo\n    }\n    type Subscription {\n        newTodo: Todo!\n    }\n"])));
exports.default = typeDefs;
var templateObject_1;
