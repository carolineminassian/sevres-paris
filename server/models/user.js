'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  admin: {
    type: Boolean
    // required: true,
    // default: false
  },
  passwordHashAndSalt: {
    type: String
  },
  profPic: {
    type: String
    // },
    // favorites: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'favorite'x
    // },
    // shoppingCart: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'cart'
    // },
    // inspo: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'inspo'
  },
  creditCardToken: {
    type: String
  }
});

const User = mongoose.model('User', schema);

module.exports = User;
