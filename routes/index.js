const express = require('express');
const router = express.Router();

/* @desc GET / page. */
router.get('/', (req, res) => {
  if(req.session.user!=null){
    res.render('index.ejs', {title: 'Welcome to ESU CSO (with session)', isLoggedOn: 'true'});
  } else{
    res.render('index.ejs', {title: 'Welcome to ESU CSO', isLoggedOn: 'false'});
  }
});

module.exports = router;
