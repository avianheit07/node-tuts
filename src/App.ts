import * as express from 'express';
const siteRoutes  = require('./routes/site');
// const thumbRoutes = require('./routes/thumb');
// const apiRoutes   = require('./routes/api');
import * as login from './routes/login';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as path from 'path';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router();
    router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.redirect('/admin/user/login');
    });

    this.express.set('views', path.join(__dirname, "views"));
    this.express.set('view engine', 'pug');
    this.express.use(bodyParser.urlencoded({extended: false}));
    this.express.use(bodyParser.json());
    this.express.use(express.static(path.join(__dirname, 'public')));
    this.express.use(
      session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
      })
    );
    this.express.use('/admin/site', siteRoutes.routes);
    // this.express.use('/admin/thumb', thumbRoutes.routes);
    this.express.use('/admin/user', login.routes);
    // this.express.use('/api', apiRoutes.routes);
    this.express.use((req:express.Request, res:express.Response, next:express.NextFunction) => {
      res.render('404', {docTitle: '404 Error'})
    });
    this.express.use((req, res, next) => {
      if(!req.session.user) {
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

export default new App().express;
