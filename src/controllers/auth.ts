import { User, UserModel, UserAddModel, UserViewModel } from '../models/users';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator/check';
import { UserService } from '../services/user.service';


exports.getUsers = (req: Request, res:Response) => {
  UserService.getUsers()
  .then( (results: any) => {
    res.render('users', {props_active: 'users', props_users: results, isAuthenticated: true})
  })
  .catch( (err: any) => {
    console.log(err);
  })
}
exports.getLogin = (req: Request, res: Response) => {
  res.render('login', {props_active: 'login'})
}
// exports.postLogin = (req: Request, res: Response) => {
//   User.authenticate(req.body)
//     .then( (result: any) => {
//       if(result[0].length > 0) {
//         // return res.json({message: 'Logged In'})
//         req.session.isLoggedIn = true;
//         req.session.user = result[0];
//         return req.session.save( err=> {
//           console.log(err);
//           res.redirect('/admin/site')
//         })
//       } else {
//         return res.json({message: 'Not Logged In'})
//       }
//     })
//     .catch( (err: any) => {
//       console.log(err);
//     })
// }
// exports.postLogout = (req: Request, res: Response) => {
//   req.session.destroy( (err: any) => {
//     if(err)
//       console.log(err);
//
//     res.redirect('/');
//   });
// }
// exports.getSignup = (req: Request, res: Response) => {
//   res.render('signup', {props_active: 'signup'})
// }
// exports.postSignup = (req: Request, res: Response) => {
//   // console.log('signup')
//   const newUser = new User(req.body);
//
//   const errors = validationResult(req);
//   if(!errors.isEmpty()) {
//     return res.status(422).render('signup', {
//         props_active: 'signup',
//         docTitle: 'Signup User',
//         errorMessage: errors.array()
//     }) // 422 validation failed
//   }
//
//   newUser.save()
//   .then( () => {
//     res.redirect('/admin/site');
//   })
//   .catch( (err: any) => {
//     console.log(err);
//   })
// }
//
// exports.deleteUser = (req: Request, res: Response) => {
//   User.deleteOne(req.params.id)
//     .then( () => {
//       res.redirect('/admin/user')
//     })
//     .catch( (err: any) => {
//       console.log(err);
//     })
// }
