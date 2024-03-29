'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  choices: Array,
  scores: Array,
  createdBy: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);