import { User, UserModel, UserAddModel, UserViewModel } from '../models/users';

export class UserService {
  static get userAttributes() {
    return ['id', 'email'];
  }
  private static _user: string;
  static get user(): string {
    return UserService._user;

  }

  static getUsers() {
    return User.findAll({
      attributes: UserService.userAttributes
    });
  }
  static getUserByEmail(email: string) {
    return User.findAll({
      where: { email: email}
    });
  }
}
