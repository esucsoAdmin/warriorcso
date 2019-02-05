const express = require('express');

const router = express.Router();

/* @desc GET /projects page. */
router.get('/', (req, res) => {
  res.render('projects.ejs', {title : 'something to be said'});
});

module.exports = router;
