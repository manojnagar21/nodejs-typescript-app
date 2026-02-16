import jwt from "jsonwebtoken";
export const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
};
export const authMiddleWare = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) {
            return res.sendStatus(403);
        }
        next();
    });
};
//# sourceMappingURL=validate.js.map