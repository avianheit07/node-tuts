const User = require('../models/users');
const { validationResult } = require('express-validator/check');

exports.getUsers = (req, res, next) => {
  User.fetchAll()
  .then( results => {
    res.render('users', {props_active: 'users', props_users: results[0], isAuthenticated: req.session.isLoggedIn})
  })
  .catch( err => {
    console.log(results);
  })
}
exports.getLogin = (req, res, next) => {
  res.render('login', {props_active: 'login'})
}
exports.postLogin = (req, res, next) => {
  User.authenticate(req.body)
    .then( result => {
      if(result[0].length > 0) {
        // return res.json({message: 'Logged In'})
        req.session.isLoggedIn = true;
        req.session.user = result[0];
        return req.session.save( err=> {
          console.log(err);
          res.redirect('/admin/site')
        })
      } else {
        return res.json({message: 'Not Logged In'})
      }
    })
    .catch( err => {
      console.log(err);
    })
}
exports.postLogout = (req, res, next) => {
  req.session.destroy( err => {
    res.redirect('/')
  })
}
exports.getSignup = (req, res, next) => {
  res.render('signup', {props_active: 'signup'})
}
exports.postSignup = (req, res, next) => {
  // console.log('signup')
  const newUser = new User(req.body);

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(422).render('signup', {
        props_active: 'signup',
        docTitle: 'Signup User',
        errorMessage: errors.array()
    }) // 422 validation failed
  }

  newUser.save()
  .then( () => {
    res.redirect('/admin/site');
  })
  .catch( err => {
    console.log(err);
  })
}

exports.deleteUser = (req, res, next) => {
  User.deleteOne(req.params.id)
    .then( () => {
      res.redirect('/admin/user')
    })
    .catch( err => {
      console.log(err);
    })
}
