var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Ataraxia' });
});

router.get('/adventure', function(req, res) {
  res.render('adventure');
});

module.exports = router;
