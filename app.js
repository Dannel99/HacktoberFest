const express = require("express");
const Promise = require("bluebird");

const app = express();
const port = 3000;

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
