"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _apiRouter = _interopRequireDefault(require("./router/apiRouter.js"));
var _mainRouter = _interopRequireDefault(require("./router/mainRouter.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var corsOptions = {
  origin: ["http://localhost:3000", "https://stamptour.netlify.app"],
  method: ["GET", "POST"],
  credentials: true
};
app.use((0, _cors["default"])(corsOptions));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/", _mainRouter["default"]);
app.use("/api/v1", _apiRouter["default"]);
var _default = app;
exports["default"] = _default;