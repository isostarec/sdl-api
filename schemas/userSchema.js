const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    id: mongoose.ObjectId,
    username: String,
    name: String,
    password: String,
    email: String,
    createDate: Date,
    createdBy: String
}) 

module.exports = userSchema;