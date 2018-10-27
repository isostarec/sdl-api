const mongoose = require('mongoose');

let querySchema = new mongoose.Schema({
    id: mongoose.ObjectId,
    name: String,
    info: String,
    value: String,
    server: [],
    createDate: Date,
    createdBy: String
}) 

module.exports = querySchema;