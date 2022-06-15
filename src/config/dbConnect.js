const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://root:root@bodypath.ojocqyp.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

module.exports = db;