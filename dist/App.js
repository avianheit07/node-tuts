"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const siteRoutes = require('./routes/site');
// const thumbRoutes = require('./routes/thumb');
// const apiRoutes   = require('./routes/api');
const login = require("./routes/login");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res, next) => {
            res.redirect('/admin/user/login');
        });
        this.express.set('views', path.join(__dirname, "views"));
        this.express.set('view engine', 'pug');
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.express.use(express.static(path.join(__dirname, 'public')));
        this.express.use(session({
            secret: 'my secret',
            resave: false,
            saveUninitialized: false,
        }));
        this.express.use('/admin/site', siteRoutes.routes);
        // this.express.use('/admin/thumb', thumbRoutes.routes);
        this.express.use('/admin/user', login.routes);
        // this.express.use('/api', apiRoutes.routes);
        this.express.use((req, res, next) => {
            res.render('404', { docTitle: '404 Error' });
        });
        this.express.use((req, res, next) => {
            if (!req.session.user) {
                return next();
            }
            next();
        });
        this.express.use((req, res, next) => {
            res.locals.isAuthenticated = req.session.isLoggedIn;
            next();
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map