'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  inspoCategory: {
    type: String,
    trim: true
  },
  inspoEmbedLink: {
    type: String
    
  },
  inspoThumbnail: {
    type: String
  },
  inspoCreator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Inspo = mongoose.model('Inspo', schema);

module.exports = Inspo;
