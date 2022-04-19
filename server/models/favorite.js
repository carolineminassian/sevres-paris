'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  productFavorited: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  favoriteCategory: {
    type: String
  },
  favoritesOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
  
});

const Favorite = mongoose.model('Favorite', schema);

module.exports = Favorite;
