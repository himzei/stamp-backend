"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Error = /*#__PURE__*/_createClass(function Error() {
  _classCallCheck(this, Error);
});
exports.Error = Error;
_defineProperty(Error, "BAD_REQUEST", {
  status: 400,
  code: "BAD_REQUEST",
  message: "잘못된 요청입니다."
});
_defineProperty(Error, "NOT_FOUND", {
  status: 404,
  code: "NOT_FOUND",
  message: "요청하신 QR 정보가 존재하지 않습니다."
});
_defineProperty(Error, "CONFLICT", {
  status: 409,
  code: "CONFLICT",
  message: "이미 완료된 코스입니다."
});
_defineProperty(Error, "INTERNAL_SERVER_ERROR", {
  status: 500,
  code: "INTERNAL_SERVER_ERROR",
  message: "서버 에러"
});