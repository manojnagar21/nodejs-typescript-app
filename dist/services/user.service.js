let users = [];
export const getAllUsers = async () => {
    return users;
};
export const createUser = async (data) => {
    const newUser = {
        id: Date.now(),
        ...data
    };
    users.push(newUser);
    return newUser;
};
//# sourceMappingURL=user.service.js.map