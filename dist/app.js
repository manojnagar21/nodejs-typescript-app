import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
const app = express();
// Security middlewares
app.use(helmet());
app.use(cors());
// Body parser
app.use(express.json());
// Logging
app.use(morgan("dev"));
// Routes
app.use("/api", routes);
// error handling
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map