'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  itemsToPurchase: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  purchaser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Cart = mongoose.model('Cart', schema);

module.exports = Cart;
