'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SheetSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the character'
  },

  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Sheets', SheetSchema);