import express from "express";
import routes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import cookieParser from "cookie-parser";

const app = express()

app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);
app.use('/api', taskRoutes);

export default app;