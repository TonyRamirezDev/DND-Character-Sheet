var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Sheet = require('./api/models/characterSheetModel.js'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CharacterSheetdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/characterSheetRoutes.js'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Character Sheet RESTful API server started on: ' + port);