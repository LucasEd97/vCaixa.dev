"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _transaction = _interopRequireDefault(require("./transaction.routes"));

var _wallet = _interopRequireDefault(require("./wallet.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/routes/index.ts
const routes = (0, _express.Router)();
routes.use('/transaction', _transaction.default);
routes.use('/wallet', _wallet.default);
var _default = routes;
exports.default = _default;