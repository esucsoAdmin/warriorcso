const express = require('express');

const router = express.Router();

/*ABOUT PAGE LOGIC*/
router.get('/', (req, res) => {
  if(req.session.user!=null){
    res.render('about.ejs', {title : 'About', isLoggedOn: 'true'});
  } else{
    res.render('about.ejs', {title : 'About', isLoggedOn: 'false'});
  }
});

module.exports = router;
