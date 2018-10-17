var express = require('express');
var path = require('path');
var parseBody = require('body-parser');
var methods = require('./client/app.js')

var app = express();

app.use(express.static(path.join(__dirname + '/client')));

app.use(parseBody.urlencoded({ extended: false }));

app.post('/submit', (request, reponse) => {
	var content = request.body.content;
	console.log(request.body);
	// csvConverter(content, (error, results) => {
	// 	reponse.send(results);
	// });
	reponse.status(201).end();

});


app.listen(3000); 



