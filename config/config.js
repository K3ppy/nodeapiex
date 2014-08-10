/**
 * Created by Kep on 8/10/14.
 */
var mongoose = require('mongoose');
var options = {
    db: { native_parser: true },
    server: { poolSize: 5 },
    replset: { rs_name: 'myReplicaSetName' },
    user: '',
    pass: ''
}

module.exports = {
    "db": {
        "mongodb": mongoose.connect("mongodb://127.0.0.1:27017/apitest1", options)
    },
    "logger": {
        "api": "logs/api.log",
        "exception": "logs/exceptions.log"
    }
};


