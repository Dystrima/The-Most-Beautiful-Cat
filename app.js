require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");

const app = express();
const PORT = process.env.PORT || 3001;
const dbURI = process.env.MONGODB_URI || process.env.DB_URI;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

mongoose
	.connect(dbURI)
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
	)
	.catch((err) => console.log(err.message));

app.use(router);

module.exports = app;
