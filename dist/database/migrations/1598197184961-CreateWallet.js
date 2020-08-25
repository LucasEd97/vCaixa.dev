"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateWallet1598197184961 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'wallets',
      columns: [{
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'total',
        type: 'float',
        isNullable: false
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('wallets');
  }

}

exports.default = CreateWallet1598197184961;