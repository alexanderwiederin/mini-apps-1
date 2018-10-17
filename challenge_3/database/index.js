var mysql = require('mysql');

var dbConnection = mysql.createConnection({
	user: 'root',
	password: '',
	database: 'forms'  
});

dbConnection.connect();

var insertIntoF1Table = (name, email, password, callback) => {

	var queryString = 'INSERT INTO F1 (name, email, password) VALUES (?, ?, ?)'
	dbConnection.query(queryString, [name, email, password], (error, results, fields) => {
		if (error) {
			console.log('error on F1', error);
			callback(error);
		} else {
			console.log('success on F1', results);
			callback(null, results, fields);
		}
	});
}

var insertIntoF2Table = (address_line_1, address_line_2, city, state, zip_code, callback) => {
	var queryString = 'INSERT INTO F2 (address_line_1, address_line_2, city, state, zip_code) VALUES (?, ?, ?, ?, ?)'
	dbConnection.query(queryString, [address_line_1, address_line_2, city, state, zip_code], (error, results, fields) => {
		if (error) {
			callback(error);
		} else {
			callback(null, results, fields);
		}
	});
}

var insertIntoF3Table = (credit_card_num, expiry_date, billing_zip_code, callback) => {
	var queryString = 'INSERT INTO F3 (credit_card_num, expiry_date, billing_zip_code) VALUES (?, ?, ?)'
	dbConnection.query(queryString, [credit_card_num, expiry_date, billing_zip_code], (error, results, fields) => {
		if (error) {
			console.log('error on F3', error);
			callback(error);
		} else {
			callback(null, results, fields);
		}
	});
}

module.exports.insertIntoF1Table = insertIntoF1Table;
module.exports.insertIntoF2Table = insertIntoF2Table;
module.exports.insertIntoF3Table = insertIntoF3Table;