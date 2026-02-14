import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const validate = (schema: any) => 
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch(err) {
            res.status(400).json(err);
        }
}

export const generateToken = (userId: number): string | null => {
    return jwt.sign({ userId }, process.env.JWT_SECRET!, {
        expiresIn: "7d"
    });
}
export const authMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.JWT_SECRET!, (err) => {
        if(err) {
            return res.sendStatus(403);
        }
        next();
    });
};