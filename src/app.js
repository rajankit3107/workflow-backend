import express from "express";

//router imports
import healthcheckRoutes from "./routes/healthcheck.routes.js";

const app = express();

app.use("/api/v1/healthcheck", healthcheckRoutes);

export default app;
