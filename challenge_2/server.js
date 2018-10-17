var express = require('express');
var path = require('path');
var parseBody = require('body-parser');
var appMethods = require('./client/app.js')

var app = express();

app.use(express.static(path.join(__dirname + '/client')));

app.use(parseBody.urlencoded({ extended: false }));

app.post('/submit', (request, reponse) => {
	var content = JSON.parse(request.body.json);
	console.log('requestBody :', typeof content);
	var csvContent = appMethods.csvConverter(content);
	console.log(csvContent);

	reponse.status(201).send(csvContent);

});


app.listen(3000); 



