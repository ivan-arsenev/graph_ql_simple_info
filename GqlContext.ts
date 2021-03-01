import { Request, Response } from "express";
// simple shell interface that allows us to provide type safety to our
// context in our GraphQL resolver calls.
export interface GqlContext {
    req: Request;
    res: Response;
    pubsub: any;
}