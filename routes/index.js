var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Ataraxia' });
});

router.get('/adventure', function(req, res) {
  res.render('pokemon', {title: "Ataraxia"});
});

router.get('/pokemon', function(req, res) {
  res.render('pokemon', {title: "Ataraxia"});
});

module.exports = router;
