'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  color: {
    type: String
  },
  size: {
    type: String
  },
  colorScheme: {
    type: String
  },
  material: {
    type: String
  },
  image: {
    type: String
  },
  videoClip: {
    type: String
  },
  occasion: {
    type: String
  },
  season: {
    type: String
  },
  year: {
    type: String
  },
  measurements: {
    type: String
  },
  quantity: {
    type: Number
  },
  dateAdded: {
    type: Date
  },
  price: {
    type: Number
  },
  suggestedProductTag: {
    type: String
  },
  description: {
    type: String
  },
  stateOfProduct: {
    type: String
  },
  activeStatus: {
    type: String
  },
  // number of people that have the product in their favorites
  peopleWatching: {
    type: Number
  },
  // tracks if product has been favorited
  favorited: {
    type: Boolean
  },
  productCategory: {
    type: String
  },
  itemType: {
    type: String
  },
  productRef: {
    type: String
  }
});

const Product = mongoose.model('Product', schema);

module.exports = Product;
