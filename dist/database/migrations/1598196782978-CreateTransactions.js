"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateTransactions1598196782978 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'transactions',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'category_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'date',
        type: 'timestamp with time zone',
        isNullable: false
      }, {
        name: 'type',
        type: 'char',
        isNullable: false
      }, {
        name: 'value',
        type: 'float',
        isNullable: false
      }, {
        name: 'description',
        type: 'varchar',
        isNullable: false
      }, {
        name: 'wallet_id',
        type: 'uuid',
        isNullable: true
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('transactions');
  }

}

exports.default = CreateTransactions1598196782978;