const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('game', { title: 'Express' });
});

module.exports = router;
