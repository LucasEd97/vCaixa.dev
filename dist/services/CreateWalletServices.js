"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _WalletsRepository = _interopRequireDefault(require("../repositories/WalletsRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateWalletService {
  async execute({
    total
  }) {
    const walletsRepository = (0, _typeorm.getCustomRepository)(_WalletsRepository.default);

    if (total === Number(0) || total === undefined) {
      const wallet = walletsRepository.create({
        total: 0
      });
      await walletsRepository.save(wallet);
      return wallet;
    }

    throw new Error('Initial total has to be zero!');
  }

}

var _default = CreateWalletService;
exports.default = _default;