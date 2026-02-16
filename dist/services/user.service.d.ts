interface User {
    id: number;
    name: string;
    email: string;
}
export declare const getAllUsers: () => Promise<User[]>;
export declare const createUser: (data: Omit<User, "id">) => Promise<{
    name: string;
    email: string;
    id: number;
}>;
export {};
//# sourceMappingURL=user.service.d.ts.map