var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Exercise = require('../models/Exercise.js');

/* GET All Exercise. */
router.get('/', function(req, res, next) {
  Exercise.find(function(err,prod){
  	if (err) return next(err);
  	res.json(prod);
  })
});

/*Get exercise by id*/
router.get('/:id', function(req, res, next) {
  Exercise.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Exercise.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Exercise.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Exercise.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;