import { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controller.js";
import { createUserSchema } from "../validations/user.validation.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.get("/", getUsers);
router.post("/", validate(createUserSchema), createUser);

export default router;