var express = require('express');
var config = require('../config/config');
var router = express.Router({caseSensitive:true, strict:true});
var db = config.db.mongodb;
var userSchema = require('../models/user');

router.route('/users')
    .all(function(req, res, next){
        console.log("middle ware");
        next();
    })
    .get(function(req,res,next){

        userSchema.find(function(err, users) {
            if (err)
                res.json(err);
            if (users){
                res.json(users);
            }
            res.json({status:404, message:"no users"})

        });
    })
    .post(function(req, res, next){
        console.log("post");

        var user = new userSchema({
            username: req.body.username,
            email: req.body.email,
            dob: req.body.dob  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
        });

        user.save(function(err) {
        if (err) {
            console.log(err);
            res.json(err);
        }
        else {
            res.json({status:200, message:"success"});
        }
     });
})

router.route('/users/:user_id')
    // useful to add middleware
    .all(function(req, res, next) {
        // call controller in future
        console.log("middle ware");
        next();
    })

    .get(function(req, res, next) {
        console.log('get');
        userSchema.findById(req.params.user_id, function(err, user){
            if (err){
                res.json(err);
            } else {
                if (user)
                    res.json(user);
                else {
                    res.json({status:404, message:"user not found"});
                }
            }

        });
    })

    .put(function(req, res, next){
        console.log("put");

        var user = userSchema.findById(req.params.user_id, function(err, user){
            if (err){
                res.json(err);
            }

            user.username = req.body.username;
            user.dob = req.body.dob;

            user.save(function(err) {
                if (err) {
                    console.log(err);
                    res.json(err);
                }
                res.json(user);

            });
        })
    })
    .delete(function(req, res, next){
        console.log("delete");
        userSchema.findByIdAndRemove(req.params.user_id, function(err, user){
            if (err){
                res.json(err);
            }
            res.json(res.json({status:200, message:"success"}));

        })
     })
module.exports = router;
