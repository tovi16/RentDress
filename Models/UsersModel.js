const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    "FirstName": String,
    "LastName": String,
    "Mail": String,
    "Password": String
})

let UsersModel = mongoose.model('users', UserSchema)

module.exports = UsersModel;