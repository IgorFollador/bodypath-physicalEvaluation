import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/bodypath-dev?");

let db = mongoose.connection;

export default db;