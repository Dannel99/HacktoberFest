const express = require("express");
const Promise = require("bluebird");

const app = express();
const port = 3000;

app.listen(port, () => {
	console.log("Server listening on port " + port)
});
