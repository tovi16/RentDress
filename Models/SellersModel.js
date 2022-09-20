const mongoose = require('mongoose');

let SellerSchema = new mongoose.Schema({
    "Name": String,
    "Adress": String,
    "Phone": String,
    "Mail": String,
    "Dresses_id":[String]
    
})

let SellersModel = mongoose.model('sellers', SellerSchema)

module.exports = SellersModel;