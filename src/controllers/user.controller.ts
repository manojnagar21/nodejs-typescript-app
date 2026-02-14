import type { Request, Response } from "express";
import * as userService from "../services/user.service.ts";

export const getUsers = async (_req: Request, res: Response) => {
    const users = await userService.getAllUsers();
    res.json(users);
};
export const createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
};