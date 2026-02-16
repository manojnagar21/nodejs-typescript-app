import { Router } from "express";
import userRoutes from "./user.routes.ts";
const router = Router();
router.use("./users", userRoutes);
export default router;
//# sourceMappingURL=index.js.map