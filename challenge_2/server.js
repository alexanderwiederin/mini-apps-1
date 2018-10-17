var express = require('express');
var path = require('path');
var parseBody = require('body-parser');
var appMethods = require('./csvConverter.js');
var multer = require('multer');
var fs = require('fs');

var upload = multer({dest: 'uploads/'});

var app = express();

app.use(express.static(path.join(__dirname + '/client')));


app.post('/upload', upload.single('json'), (request, reponse) => {
	// var content = JSON.parse(request.body.json);
	console.log('requestBody :', request.file.path);

	fs.readFile(request.file.path, 'utf-8', (err, data) => {
		if(err) {
			console.log(err);
			reponse.status(500).send(err);
		} else {
			console.log(data);

			var csvContent = appMethods.csvConverter(JSON.parse(data));
			console.log(csvContent);
			reponse.status(201).send(csvContent);
		}
	})
});


app.listen(3000); 



