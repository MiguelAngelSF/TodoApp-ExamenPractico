import express from "express";
import routes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, X-Requested-With, Content-Type, Accept",
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, FETCH");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE, FETCH");
    next();
});
app.use(cors({
    credentials: true,
    origin: 'https://neon-shortbread-e9495a.netlify.app',
    // origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);
app.use('/api', taskRoutes);

export default app;