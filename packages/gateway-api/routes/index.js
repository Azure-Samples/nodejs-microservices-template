const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.text('Hello World!');
});

module.exports = router;

