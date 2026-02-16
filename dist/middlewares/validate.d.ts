import type { Request, Response, NextFunction } from "express";
export declare const validate: (schema: any) => (req: Request, res: Response, next: NextFunction) => void;
export declare const generateToken: (userId: number) => string | null;
export declare const authMiddleWare: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validate.d.ts.map