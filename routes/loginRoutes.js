var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
// var Sequelize = require("sequelize");
// var config = require(__dirname + "/../config/config.json")[env];

// var login = {};

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'FilmSnob Login'
});

// if (config.use_env_variable) {
//     var sequelize = new Sequelize(process.env[config.use_env_variable]);
//   } else {
//     var sequelize = new Sequelize(
//       config.database,
//       config.username,
//       config.password,
//       config
//     );
//   }

module.exports = function(app) {


app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '../views/index.handlebars'));
});

app.post('/auth', function(request, response) {
    var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('../views/account.handlebars');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);
}

// module.exports = login;