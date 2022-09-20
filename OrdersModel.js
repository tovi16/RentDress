const mongoose = require('mongoose');

let OrderSchema = new mongoose.Schema({
    "Seller_id": String,
    "User_id": String,
    "DateReturn": Date,
    "Price": String,
    "Delivery": String,
    "status_order":String
})

let OrdersModel = mongoose.model('orders', OrderSchema)

module.exports = OrdersModel;