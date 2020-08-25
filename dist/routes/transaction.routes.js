"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _typeorm = require("typeorm");

var _TransactionsRepository = _interopRequireDefault(require("../repositories/TransactionsRepository"));

var _CreateTransactionServices = _interopRequireDefault(require("../services/CreateTransactionServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
const transacationRouter = (0, _express.Router)();
transacationRouter.get('/', async (request, response) => {
  try {
    const transactionsRepository = (0, _typeorm.getCustomRepository)(_TransactionsRepository.default);
    const transactions = await transactionsRepository.find();
    return response.json(transactions);
  } catch (err) {
    return response.status(400).json({
      error: err.message
    });
  }
});
transacationRouter.post('/', async (request, response) => {
  try {
    const {
      wallet_id
    } = request.headers;
    const {
      date,
      type,
      value,
      description,
      category_id
    } = request.body;
    const createTransaction = new _CreateTransactionServices.default();
    const transaction = await createTransaction.execute({
      date,
      type,
      value,
      description,
      category_id,
      wallet_id
    });
    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({
      erro: err.message
    });
  }
});
var _default = transacationRouter;
exports.default = _default;