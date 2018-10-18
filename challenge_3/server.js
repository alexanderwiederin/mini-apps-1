var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var databaseMethods = require('./database/index.js')

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/public')));

app.post('/purchase', (request, response) => {

	databaseMethods.insertIntoF1Table(request.body.name, request.body.email, request.body.password, (error, results) => {
		if(error) {
			response.status(500).send();
		} else {
			response.status(201).send();
		}
	});

});



app.listen(3000, () => {
	console.log('listening on port 3000');
})


// app.post('/f2', (request, response) => {

// 	var answers = request.body;

// 	databaseMethods.insertIntoF2Table(answers.address_line_1, answers.address_line_2, answers.city, answers.state, answers.zip_code, (error, results) => {
// 		if(error) {
// 			response.status(500).send();
// 		} else {
// 			response.status(201).send();
// 		}
// 	});
	
// });

// app.post('/f3', (request, response) => {

// 	var answers = request.body;

// 	databaseMethods.insertIntoF3Table(answers.credit_card_num, answers.expiry_date, answers.billing_zip_code, (error, results) => {
// 		if(error) {
// 			response.status(500).send();
// 		} else {
// 			response.status(201).send();
// 		}
// 	});
	
// });
