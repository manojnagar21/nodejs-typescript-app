interface User {
    id: number;
    name: string;
    email: string;
}

let users: User[] = [];

export const getAllUsers = async () => {
    return users;
};


export const createUser = async (data: Omit<User, "id">) => {
    const newUser = {
        id: Date.now(),
        ...data
    };
    users.push(newUser);
    return newUser;
};