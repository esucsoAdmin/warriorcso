const express = require('express');

const router = express.Router();

/*
RENT PAGE:
WORK IN PROGRESS
*/
router.get('/', (req, res) => {
  res.render('rent.ejs', {title : 'something to be said'});
});

module.exports = router;
