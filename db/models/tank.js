const mongoose = require('mongoose');
const Schema = mongoose.Schema

const tankSchema = new Schema({
    name: String,
    size: String
});

module.exports = mongoose.model('tank', tankSchema);