"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
/*export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.dbPort,

  dialect: "postgres",
  storage: ":memory:",
});
*/
exports.sequelize = new sequelize_typescript_1.Sequelize("postgres://postgres:postgres22sql@database-1.cqbmj5yaoohx.us-east-1.rds.amazonaws.com:5432/postgres");
//# sourceMappingURL=sequelize.js.map