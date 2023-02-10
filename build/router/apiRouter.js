"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _apiController = require("../controller/apiController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var apiRouter = _express["default"].Router();
apiRouter.get("/test", _apiController.test);
apiRouter.post("/status");
var _default = apiRouter;
exports["default"] = _default;