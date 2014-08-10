var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', {  // schema type is second arg
    username : String,
    email : String,
    dob : Date
});