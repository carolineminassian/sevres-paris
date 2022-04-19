'use strict';

const { Router } = require('express');

const bcryptjs = require('bcryptjs');
const User = require('./../models/user');

const router = new Router();

router.post('/sign-up', (req, res, next) => {
  const { name, email, password } = req.body;
  let admin = false;
  if (email === 'caroline.m.minassian@gmail.com') {
    admin = true;
  }
  User.findOne({ email })
    .then((document) => {
      if (!document) {
        bcryptjs
          .hash(password, 10)
          .then((hash) => {
            return User.create({
              name,
              email,
              admin,
              passwordHashAndSalt: hash
            });
          })
          .then((user) => {
            req.session.userId = user._id;
            res.json({ user });
          })
          .catch((error) => {
            next(error);
          });
      } else {
        return Promise.reject(new Error('Email already exists.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-in', (req, res, next) => {
  let user;
  // let admin = false;
  const { email, password } = req.body;
  User.findOne({ email })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHashAndSalt);
      }
    })
    .then((result) => {
      if (result) {
        req.session.userId = user._id;
        // if (email === 'caroline.m.minassian@gmail.com') {
        //   admin = true;
        res.json({ user });
        // res.json({ user, admin });
        // } else {
        // admin = false;
        // res.json({ user });
        // res.json({ user, admin });
        // }
        // res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    // .then(() => {
    //   res.redirect('/');
    // })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

router.get('/me', (req, res, next) => {
  const user = req.user;
  res.json({ user });
});

module.exports = router;
