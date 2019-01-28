const DB = require('../config/database')

module.exports = class Users {
  constructor(userObj) {
    this.email = userObj.email;
    this.password = userObj.password;
  }

  save() {
    return DB.query("INSERT into users SET ?", this);
  }
  static fetchAll() {
    return DB.query("SELECT * from users");
  }
  static fetchOneByEmail(email) {
    return DB.query("SELECT * from users where email=?", [email]);
  }
  static deleteOne(id) {
    return DB.query("DELETE FROM users where id = ?", [id]);
  }
  static authenticate(userObj) {
    return DB.query("SELECT * FROM users where email = ? AND password = ? ", [userObj.email, userObj.password])
  }
}
