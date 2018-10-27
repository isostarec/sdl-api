const mongoose = require('mongoose');

let serverSchema = new mongoose.Schema({
    id: mongoose.ObjectId,
    isProduction: Boolean,
    name: String,
    connString: String,
    info: String,
    createDate: Date,
    createdBy: String
}) 

module.exports = serverSchema;