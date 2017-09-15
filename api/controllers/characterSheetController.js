'use strict';


var mongoose = require('mongoose'),
  Sheet = mongoose.model('Sheets');

exports.list_all_sheets = function(req, res) {
  Sheet.find({}, function(err, sheet) {
    if (err)
      res.send(err);
    res.json(sheet);
  });
};




exports.create_a_sheet = function(req, res) {
  var new_sheet = new Sheet(req.body);
  new_sheet.save(function(err, sheet) {
    if (err)
      res.send(err);
    res.json(sheet);
  });
};


exports.read_a_sheet = function(req, res) {
  Sheet.findById(req.params.sheetId, function(err, sheet) {
    if (err)
      res.send(err);
    res.json(sheet);
  });
};


exports.update_a_sheet = function(req, res) {
  Sheet.findOneAndUpdate({_id: req.params.sheetId}, req.body, {new: true}, function(err, sheet) {
    if (err)
      res.send(err);
    res.json(sheet);
  });
};


exports.delete_a_sheet = function(req, res) {


  Task.remove({
    _id: req.params.sheetId
  }, function(err, sheet) {
    if (err)
      res.send(err);
    res.json({ message: 'Sheet successfully deleted' });
  });
};

