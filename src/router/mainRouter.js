"use strict";
import express from "express";
import {
  getCourse,
  getHome,
  getQr,
  getUsed,
  postQr,
} from "../controller/mainController.js";

const mainRouter = express.Router();

mainRouter.get("/", getHome);

mainRouter.get("/used", getUsed);
mainRouter.get("/course", getCourse);
mainRouter.route("/qr").get(getQr).post(postQr);

export default mainRouter;
