var express = require('express');
var router = express.Router();

router.get('/customers', function(req, res, next){
    res.send('CUSTOMER API');
})

module.exports = router;