"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _typeorm = require("typeorm");

var _WalletsRepository = _interopRequireDefault(require("../repositories/WalletsRepository"));

var _CreateWalletServices = _interopRequireDefault(require("../services/CreateWalletServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Retorna objeto com Saldo total da carteira e movimentações do dia
const walletRouter = (0, _express.Router)();
walletRouter.get('/', async (request, response) => {
  const walletRepository = (0, _typeorm.getCustomRepository)(_WalletsRepository.default);
  const wallets = await walletRepository.find();
  return response.json(wallets);
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