import * as Sequelize from 'sequelize';
import { sequelize } from '../config/database';

export interface UserAddModel {
  id: number,
  email: string,
  password: string
}

export interface UserViewModel {
  id: number,
  email: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
  email: string;
  password: string;
}

export const User = sequelize.define<UserModel, UserAddModel>('user', {
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
