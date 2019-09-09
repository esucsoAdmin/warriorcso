const express = require('express');

const router = express.Router();

/*
PROJECT ROUTING:
WORK IN PROGRESS
*/
router.get('/', (req, res) => {
  res.render('projects.ejs', {title : 'something to be said'});
});

module.exports = router;
