const { stringify } = require('jsonfile/utils');
const mongoose = require('mongoose');

let DressSchema = new mongoose.Schema({
    "SellerId" : String,
    "Datetime" : Date,
    "Length" : String,
    "Color" : String,
    "Size":String,
    "Sleeves":String,
    "Price":String,
    "Type":String,
    "Category":String,
    "Picture":String,
    "Status":String



})

let DressesModel = mongoose.model('dresses', DressSchema)

module.exports = DressesModel;