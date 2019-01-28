"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const database = 'tutorial';
const user = 'nodetuts2';
const password = 'nodetuts2';
const host = '192.168.254.103';
exports.sequelize = new Sequelize(database, user, password, {
    dialect: 'mysql', port: 3306, host: host
});
//# sourceMappingURL=database.js.map