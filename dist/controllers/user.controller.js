import * as userService from "../services/user.service.ts";
export const getUsers = async (_req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
};
export const createUser = async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
};
//# sourceMappingURL=user.controller.js.map