var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://vis:vis@ds145138.mlab.com:45138/shopmanager', ['customers']);

//Fetching All Customers
router.get('/customers', function(req, res, next){
    db.customers.find(function(err, customers){
        if(err){
            res.send(err);
        }
        res.json(customers);
    })
})

module.exports = router;