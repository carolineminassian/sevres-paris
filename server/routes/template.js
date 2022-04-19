'use strict';

// const { Router } = require('express');

// const router = new Router();

// const express = require('express');
// const router = express.Router();
const json2csv = require('json2csv');
const Product = require('../models/product');

// router.get('/template', (req, res) => {
exports.get = (req, res) => {
  // router.get(req, res) => {
  // const fields = [
  //   'name',
  //   'color',
  //   'size',
  //   'colorScheme',
  //   'material',
  //   'image',
  //   'videoClip',
  //   'occasion',
  //   'season',
  //   'year',
  //   'measurements',
  //   'quantity',
  //   'dateAdded',
  //   'price',
  //   'suggestedProductTag',
  //   'description',
  //   'stateOfProduct',
  //   'activeStatus',
  //   'peopleWatching',
  //   'favorited',
  //   'productCategory',
  //   'itemType',
  //   'productRef'
  // ];

  const fields = Object.keys(Product.schema.obj);

  const csv = json2csv.parse({ fields });
  // const csv = json2csv.parse({ data: '', fields });

  // res.set('Content-Disposition', 'attachment;filename=product-upload.csv');
  // res.set('Content-Type', 'application/octet-stream');

  res.send(csv);
};
// );

// module.exports = router;
