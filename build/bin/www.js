"use strict";

require("dotenv/config");
require("regenerator-runtime");
var _app = _interopRequireDefault(require("../app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = process.env.PORT || 4000;
_app["default"].listen(PORT, function () {
  return console.info("Server Open :::::: http://localhost:".concat(PORT));
});