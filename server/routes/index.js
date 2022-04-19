'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const routeGuard = require('./../middleware/route-guard');
const upload = require('../middleware/file-upload');
const csv = require('fast-csv');
const fs = require('fs');
const Product = require('../models/product');
const template = require('./template');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.json({});
});

router.get('/template', template.get);

router.post('/product-upload', upload.single('file'), (req, res, next) => {
  if (!req.file) {
    return res.status(400).send({
      message: 'Please upload a CSV file.'
    });
  }
  let product;
  const productDataUpload = req.files.file; // access files array of request and 'file' property which matches name of file input name defined on client side
  console.log(productDataUpload);
  const csvData = [];

  csv
    .fromString(productDataUpload.data.toString(), {
      headers: true,
      ignoreEmpty: true
    })
    // fs.createReadStream(req.file.path)
    //   .pipe(csv.parse({ headers: true, ignoreEmpty: true }))
    //   .on('error', (error) => {
    //     throw error.message;
    //   })
    .on('data', (data) => {
      data['_id'] = new mongoose.Types.ObjectId();
      csvData.push(data);
      console.log('csv data', csvData);
    })
    .on('end', () => {
      Product.create(csvData, (err, documents) => {
        if (err) throw err;
      })
        .then((doc) => {
          product = doc;
          res.json({ product });
        })
        .catch((error) => {
          next(error);
        });
    });
});

module.exports = router;
