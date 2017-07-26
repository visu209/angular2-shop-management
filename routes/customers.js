var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://vis:vis@ds145138.mlab.com:45138/shopmanager', ['customers', 'litrs']);

//Fetching All literals
router.get('/litrs', function (req, res, next) {
    db.litrs.find(function (err, litrs) {
        if (err) {
            res.send(err);
        }
        res.json(litrs);
    })
})

//Fetch a single literal
router.get('/litr/:id', function (req, res, next) {
    db.litrs.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, litr) {
        if (err) {
            res.send(err);
        }
        res.json(litr);
    })
})

//Save a literal
router.post('/litr', function (req, res, next) {
    var litr = req.body;
    if (!litr.litrNme) {
        res.status(400);
        res.json({
            "error": "Invalid literal Name"
        });
    } else {
        db.litrs.save(litr, function (err, litr) {
            if (err) {
                res.send(err);
            }
            res.json(litr);
        })
    }
})

//Delete a literal
router.delete('/litr/:id', function (req, res, next) {
    db.litrs.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, litr) {
        if (err) {
            res.send(err);
        }
        res.json(litr);
    })
})

//Updating the literal
router.put('/litr/:id', function (req, res, next) {
    var updLitr = req.body;

    if (!updLitr) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        })
    } else {
        db.litrs.update({ _id: mongojs.ObjectId(req.params.id) }, updLitr, {}, function (err, litr) {
            if (err) {
                res.send(err);
            }
            res.json(litr);
        })
    }
})

//Fetching All Customers
router.get('/customers', function (req, res, next) {
    db.customers.find(function (err, customers) {
        if (err) {
            res.send(err);
        }
        res.json(customers);
    })
})

//Fetch a single customer
router.get('/customer/:id', function (req, res, next) {
    db.customers.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, customer) {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    })
})

//Save a customer
router.post('/customer', function (req, res, next) {
    var customer = req.body;
    if (!customer.firstName) {
        res.status(400);
        res.json({
            "error": "Invalid First Name"
        });
    } else {
        db.customers.save(customer, function (err, customer) {
            if (err) {
                res.send(err);
            }
            res.json(customer);
        })
    }
})

//Delete a customer
router.delete('/customer/:id', function (req, res, next) {
    db.customers.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, customer) {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    })
})

//Updating the customer
router.put('/customer/:id', function (req, res, next) {
    var updCustomer = req.body;

    if (!updCustomer) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        })
    } else {
        db.customers.update({ _id: mongojs.ObjectId(req.params.id) }, updCustomer, {}, function (err, customer) {
            if (err) {
                res.send(err);
            }
            res.json(customer);
        })
    }
})
module.exports = router;