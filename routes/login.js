const express = require('express');
const auth = require('../controllers/auth');
const router = express.Router();
const { check, body }       = require('express-validator/check');
const User = require('../models/users');
const isAuth = require('../middleware/isAuth')

router.get('/login', auth.getLogin);
router.get('/signup', auth.getSignup);
router.post('/login', auth.postLogin);
router.post('/logout', auth.postLogout);
router.post('/signup', [
      check('email').isEmail().withMessage('Invalid Email Input')
        .custom( value => {
          return User.fetchOneByEmail(value)
            .then( user => {
              if(user[0].length > 0){
                return Promise.reject('E-mail is already in use');
              } else {
                return true;
              }
            })
        }),
      body('password').exists().isLength({min: 5}).withMessage('Password is too short'),
      body('confirmPassword', 'Confirmation Password should be the same')
        .exists()
        .custom((value, { req }) => value === req.body.password)
    ],
    auth.postSignup);
router.get('/', isAuth, auth.getUsers);
router.get('/delete/:id',isAuth, auth.deleteUser);
exports.routes = router;
