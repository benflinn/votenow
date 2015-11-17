'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  option5: String,
  score1: Number,
  score2: Number,
  score3: Number,
  score4: Number,
  score5: Number,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);