import { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controller.ts";
import { createUserSchema } from "../validations/user.validation.ts";
import { validate } from "../middlewares/validate.ts";

const router = Router();

router.get("/", getUsers);
router.post("/", validate(createUserSchema), createUser);

export default router;