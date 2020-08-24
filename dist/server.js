"use strict";

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_routes.default);
app.listen(process.env.PORT || 3333, () => {
  console.log('SERVIDOR INICIADO NA PORTA 3333');
});