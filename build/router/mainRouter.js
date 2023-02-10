"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _mainController = require("../controller/mainController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var mainRouter = _express["default"].Router();
mainRouter.get("/", _mainController.getHome);
mainRouter.get("/used", _mainController.getUsed);
mainRouter.get("/course", _mainController.getCourse);
mainRouter.route("/qr").get(_mainController.getQr).post(_mainController.postQr);
var _default = mainRouter;
exports["default"] = _default;