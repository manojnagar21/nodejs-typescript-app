import express from "express";
import type { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes/index.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app: Application = express();

// Security middlewares
app.use(helmet());
app.use(cors());

// Body parser
app.use(express.json());

// Logging
app.use(morgan("dev"));

// Routes
app.use("/api", routes);
app.use("/api/users", userRoutes);

// error handling
app.use(errorHandler);

export default app;