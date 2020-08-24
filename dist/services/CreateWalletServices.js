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
    const wallet = walletsRepository.create({
      total
    });
    await walletsRepository.save(wallet);
    return wallet;
  }

}

var _default = CreateWalletService;
exports.default = _default;