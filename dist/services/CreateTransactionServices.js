"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _TransactionsRepository = _interopRequireDefault(require("../repositories/TransactionsRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
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
    const transaction = transactionsRepository.create({
      date,
      type,
      value,
      description,
      wallet_id,
      category_id
    });
    await transactionsRepository.save(transaction);
    return transaction;
  }

}

var _default = CreateTransactionService;
exports.default = _default;