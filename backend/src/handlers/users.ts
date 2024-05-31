import { Request, Response } from "express";

// "/api/users/"
export function getUsers(request: Request, response: Response) {
    response.send([]);
}

// "/api/users/:id"
export function getUserById(request: Request, response: Response) {
    response.send({});
}