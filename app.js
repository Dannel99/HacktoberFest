const express = require("express");
const Promise = require("bluebird");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res, next) {
	res.send("Let's get to pullin.");
});

app.post('/', function(req, res, next) {
	res.send('Data: ' + req.body);
});

app.use(function (err, req, res, next) {
  	//res.status(err.status || 500);
  	if(err.status = 400)
  	{
  		console.log(err);
  		res.redirect("/");
  	}
  	else
  		res.sendStatus(err.status)
});

app.listen(port, () => {
	console.log("Server listening on port " + port)
});
