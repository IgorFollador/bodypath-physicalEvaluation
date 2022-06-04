const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bodypath-dev?");

let db = mongoose.connection;

module.exports = db;