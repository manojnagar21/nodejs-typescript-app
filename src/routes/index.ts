import { Router } from "express";
import userRoutes from "./user.routes.js";
import { healthCheck } from "../controllers/health.controller.js";

const router = Router();

router.use("./users", userRoutes);

router.get("/", (_req, res) => {
    res.json({
        message: "API is running 🚀"
    });
});

router.get("/health", healthCheck);

export default router;