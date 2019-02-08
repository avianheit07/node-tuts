const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    default: 0 // 0 - new, 1 - activated
  }
});
module.exports = Mongoose.model('User', userSchema);