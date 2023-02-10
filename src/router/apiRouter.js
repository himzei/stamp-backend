import express from "express";
import { test } from "../controller/apiController";

const apiRouter = express.Router();

apiRouter.get("/test", test);
apiRouter.post("/status");

export default apiRouter;
