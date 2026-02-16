interface User {
    id: number;
    name: string;
    email: string;
}

let users: User[] = [];

export const getAllUsers = async () => {
    // return users;
    return [
        { id: 1, name: "John", email: "john@test.com" },
        { id: 2, name: "Jane", email: "jane@test.com" }
    ];
};


export const createUser = async (data: Omit<User, "id">) => {
    const newUser = {
        id: Date.now(),
        ...data
    };
    users.push(newUser);
    return newUser;
};