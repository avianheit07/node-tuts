"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../models/users");
class UserService {
    static get userAttributes() {
        return ['id', 'email'];
    }
    static get user() {
        return UserService._user;
    }
    static getUsers() {
        return users_1.User.findAll({
            attributes: UserService.userAttributes
        });
    }
    static getUserByEmail(email) {
        return users_1.User.findAll({
            where: { email: email }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map