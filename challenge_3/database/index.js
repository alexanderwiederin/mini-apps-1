var mysql = require('mysql');

var dbConnection = mysql.createConnection({
	user: 'root',
	password: '',
	database: '' // TODO: define database 
});

dbConnection.connect();