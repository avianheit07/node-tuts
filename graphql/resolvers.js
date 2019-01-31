const User   = require('../models/users');
const bcrypt = require('bcryptjs');

module.exports = {
    async createUser({ userInput }, req) { // destructyring { prop_name }//resolver
    console.log(userInput);
    const existingUser = await User.fetchOneByEmail(userInput.email);
    if(existingUser[0].length > 0) { // dont create
      console.log(existingUser[0]);
      const error = new Error('User exists already');
      throw error;
    }

    const hashedPW = await bcrypt.hash(userInput.password, 12);
    const toCreate = {
      email: userInput.email,
      name: userInput.name,
      password: hashedPW
    };

    const user = new User(toCreate);
    const createdUser = await user.save();
    const toPass = { ...toCreate, id: createdUser[0].insertId};
    console.log('created', toPass);
    return toPass;
  },
  async getUser({ email }, req) {
    const userData = await User.fetchOneByEmail(email);

    if(userData[0].length > 0) {
      console.log('found', userData[0][0]);
      return userData[0][0];
    }
    console.log('empty', userData)
    return {};
  }
}
