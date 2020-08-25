"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _TransactionsRepository = _interopRequireDefault(require("../repositories/TransactionsRepository"));

var _CategoriesRepository = _interopRequireDefault(require("../repositories/CategoriesRepository"));

var _WalletsRepository = _interopRequireDefault(require("../repositories/WalletsRepository"));

var _const = _interopRequireDefault(require("../settings/const"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
const consts = new _const.default();

class CreateTransactionService {
  async execute({
    date,
    type,
    value,
    description,
    wallet_id,
    category_id
  }) {
    const transactionsRepository = (0, _typeorm.getCustomRepository)(_TransactionsRepository.default);
    const walletRepository = (0, _typeorm.getCustomRepository)(_WalletsRepository.default);
    const categoriesRepository = (0, _typeorm.getCustomRepository)(_CategoriesRepository.default);
    const walletId = String(wallet_id);
    const existsWallet = await walletRepository.findOne({
      where: {
        id: walletId
      }
    });

    if (!existsWallet) {
      throw new Error('Wallet does not exist');
    }

    const existsCategory = await categoriesRepository.findOne({
      where: {
        id: category_id
      }
    });

    if (!existsCategory) {
      throw new Error(`Unexistent Category to save transaction`);
    }

    if (value < 0) {
      throw new Error('Value of Transaction cannot be negative');
    }

    if (type !== consts.TYPE_ENTRY && type !== consts.TYPE_OUTPUT) {
      throw new Error(`Transactions type must be '${consts.TYPE_ENTRY}' for Earns or '${consts.TYPE_OUTPUT}' for Losses`);
    }

    const transaction = transactionsRepository.create({
      date,
      type,
      value,
      description,
      category_id,
      wallet_id: walletId
    });
    await transactionsRepository.save(transaction);
    return transaction;
  }

}

var _default = CreateTransactionService;
exports.default = _default;