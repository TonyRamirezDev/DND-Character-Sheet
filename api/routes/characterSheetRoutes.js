'use strict';
module.exports = function(app) {
  var characterSheet = require('../controllers/characterSheetController');

  // characterSheet Routes
  app.route('/sheets')
    .get(characterSheet.list_all_sheets)
    //.post(characterSheet.create_a_sheets);


  app.route('/sheets/:sheetsId')
    .get(characterSheet.read_a_sheet)
    .put(characterSheet.update_a_sheet)
    .delete(characterSheet.delete_a_sheet);
};