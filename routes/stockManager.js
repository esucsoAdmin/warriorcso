const express = require('express');

const router = express.Router();

// Importing Item Model
const stockItem = require('../models/stockItem');

// @route  GET stock/admin
// desc    Get all Items
// @access Public
router.get('/admin', (req, res) => {
  res.render('adminBoard.ejs',{title: 'Rendering Index', isLoggedOn: 'false'});
});

// @route  GET stock/allItems
// desc    Get all Items
// @access Public
router.get('/allItems', (req, res) => {
  Item.find()
  .sort({totalCount: - 1 })
  .then(items => res.json(items));
});


// @route  POST stock/addItem
// desc    Add a new Item
// @access Public
router.post('/addItem', (req, res) => {
  const newItem = new stockItem({
    name: req.body.name,
    totalCount: req.body.totalCount
  });
  
  newItem.save()
  .then(item => res.json(`Added: ${item}`));
});


module.exports = router;

