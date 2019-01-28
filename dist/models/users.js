"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const database_1 = require("../config/database");
exports.User = database_1.sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING
});
//   constructor(userObj: any) {
//     this.email = userObj.email;
//     this.password = userObj.password;
//   }
//
//   save() {
//     return DB.query("INSERT into users SET ?", this);
//   }
//   static fetchAll() {
//     return DB.query("SELECT * from users");
//   }
//   static fetchOneByEmail(email: string) {
//     return DB.query("SELECT * from users where email=?", [email]);
//   }
//   static deleteOne(id: number) {
//     return DB.query("DELETE FROM users where id = ?", [id]);
//   }
//   static authenticate(userObj: any) {
//     return DB.query("SELECT * FROM users where email = ? AND password = ? ", [userObj.email, userObj.password])
//   }
// }
//# sourceMappingURL=users.js.map