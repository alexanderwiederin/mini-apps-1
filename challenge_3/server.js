var express = require('express');
var path = require('path');

var app = express();

console.log(path.join(__dirname + '/public'));

app.use(express.static(path.join(__dirname + '/public')));

app.listen(3000, () => {
	console.log('listening on port 3000');
})

