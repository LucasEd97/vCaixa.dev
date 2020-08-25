"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateWalletServices = _interopRequireDefault(require("../services/CreateWalletServices"));

var _ListWalletServices = _interopRequireDefault(require("../services/ListWalletServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
// Retorna objeto com Saldo total da carteira e movimentações do dia
const walletRouter = (0, _express.Router)();
walletRouter.get('/', async (request, response) => {
  try {
    const {
      wallet_id
    } = request.headers;
    const {
      initial_date,
      final_date
    } = request.body;
    const listWallet = new _ListWalletServices.default();
    const wallet = await listWallet.execute({
      wallet_id,
      initial_date,
      final_date
    });
    return response.json(wallet);
  } catch (err) {
    return response.status(400).json({
      error: err.message
    });
  }
});
walletRouter.post('/', async (request, response) => {
  try {
    const {
      total
    } = request.body;
    const createWallet = new _CreateWalletServices.default();
    const wallet = await createWallet.execute({
      total
    });
    return response.json(wallet);
  } catch (err) {
    return response.status(400).json({
      erro: err.message
    });
  }
});
var _default = walletRouter;
exports.default = _default;