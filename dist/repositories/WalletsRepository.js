"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Wallet = _interopRequireDefault(require("../models/Wallet"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let WalletRepository = (_dec = (0, _typeorm.EntityRepository)(_Wallet.default), _dec(_class = class WalletRepository extends _typeorm.Repository {}) || _class);
var _default = WalletRepository;
exports.default = _default;