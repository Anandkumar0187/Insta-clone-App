const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    location : String,
    description : String,
    image : String,
    likes : {type : Number, default : 0},
    date : {type : Date, default : Date.now}

})
const User = mongoose.model('users', userSchema);

module.exports = User;