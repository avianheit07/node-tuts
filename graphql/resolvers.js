const User   = require('../models/users');
const bcrypt = require('bcryptjs');
const validator = require('validator');
module.exports = {
    createUser: async function({ userInput }, req) { // destructyring { prop_name }//resolver
      const errors = [];
      const {email, name, password} = userInput;
      console.log(email, name, password);
      if(!validator.isEmail(email)) {
        console.log(validator.isEmail(email), 'email failed', email);
        errors.push({ message: 'E-mail is invalid.'});
      } else {
        console.log(validator.isEmail(email));
      }
      if(validator.isEmpty(password) || !validator.isLength(password, {min: 5})) {
        errors.push({ message: 'Password too short!'});
        console.log('password failed', password);
      } else {
        console.log('password success', password);
      }

      if (errors.length > 0) {
        const error = new Error('Invalid input.');
        error.data = errors;
        error.code = 422;
        throw error;
      }

      const existingUser = await User.fetchOneByEmail(email);
      if(existingUser[0].length > 0) { // dont create
        const error = new Error('User exists already!');
        throw error;
      }

      const hashedPW = await bcrypt.hash(password, 12);
      const toCreate = {
        email: email,
        name: name,
        password: hashedPW
      };

      const user = new User(toCreate);
      const createdUser = await user.save();
      const toPass = { ...toCreate, id: createdUser[0].insertId};
      console.log('created', toPass);
      return toPass;
    },
    getUser: async function({ email }, req) {
      const userData = await User.fetchOneByEmail(email);

      if(userData[0].length > 0) {
        console.log('found', userData[0][0]);
        return userData[0][0];
      }
      console.log('empty', userData)
      return {};
    }
}
