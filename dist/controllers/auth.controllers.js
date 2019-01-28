"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../models/users");
const check_1 = require("express-validator/check");
exports.getUsers = (req, res) => {
    users_1.User.fetchAll()
        .then((results) => {
        res.render('users', { props_active: 'users', props_users: results[0], isAuthenticated: req.session.isLoggedIn });
    });
};
exports.getLogin = (req, res) => {
    res.render('login', { props_active: 'login' });
};
exports.postLogin = (req, res) => {
    users_1.User.authenticate(req.body)
        .then((result) => {
        if (result[0].length > 0) {
            // return res.json({message: 'Logged In'})
            req.session.isLoggedIn = true;
            req.session.user = result[0];
            return req.session.save(err => {
                console.log(err);
                res.redirect('/admin/site');
            });
        }
        else {
            return res.json({ message: 'Not Logged In' });
        }
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.postLogout = (req, res) => {
    req.session.destroy((err) => {
        if (err)
            console.log(err);
        res.redirect('/');
    });
};
exports.getSignup = (req, res) => {
    res.render('signup', { props_active: 'signup' });
};
exports.postSignup = (req, res) => {
    // console.log('signup')
    const newUser = new users_1.User(req.body);
    const errors = check_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).render('signup', {
            props_active: 'signup',
            docTitle: 'Signup User',
            errorMessage: errors.array()
        }); // 422 validation failed
    }
    newUser.save()
        .then(() => {
        res.redirect('/admin/site');
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.deleteUser = (req, res) => {
    users_1.User.deleteOne(req.params.id)
        .then(() => {
        res.redirect('/admin/user');
    })
        .catch((err) => {
        console.log(err);
    });
};
//# sourceMappingURL=auth.controllers.js.map