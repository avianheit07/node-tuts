const User   = require('../models/users');
// const Site   = require('../models/site');
// const Thumb   = require('../models/thumbs');
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

      const existingUser = await User.findOne({ email: email });
      if(existingUser) { // dont create
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
      const toPass = { ...toCreate, _id: createdUser._id.toString()};
      console.log('created', toPass);
      return toPass;
    },
    getUser: async function({ email, password}, req) {
      console.log('called here');
      const userData = await User.findOne({email: email});

      if(userData) {
        console.log('found', userData);
        return userData;
      }
      console.log('empty', userData)
      return {};
    },

    getSites: async function({ SiteData }, req) {
      console.log('here');
      const siteResults = await Site.fetchAll();
      console.log(siteResults[0])
      if(siteResults[0].count > 0)
        return {sites: siteResults[0], totalSites: siteResults[0].count}
      return {}
    },

    createSite: async ({ siteInput }, req) => {
      console.log(siteInput);
    }
}
