import express from "express";
import cors from "cors";
import apiRouter from "./router/apiRouter.js";
import mainRouter from "./router/mainRouter.js";

const app = express();

let corsOptions = {
  origin: ["http://localhost:3000", "https://stamptour.netlify.app"],
  method: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainRouter);
app.use("/api/v1", apiRouter);

export default app;
