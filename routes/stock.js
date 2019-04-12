const express = require('express');
const router = express.Router();

// Importing Item Model
const Item = require('../models/StockItem');

// Importing Stock Controller
// const { viewItem } = require('../controllers/stockManager.js');

// FIXME: Make use of controller to handle all stock requests

// @route  GET stock/admin
// desc    Get all Items
// @access Public
router.get('/admin', (req, res, next) => {
  res.render('adminBoard.ejs', { title: 'Rendering Index', isLoggedOn: 'false' });
});

// @route  GET stock/viewItem
// desc    Get an Item
// @access Public
router.get('/getItem', (req, res) => {
  const itemName = req.body.name;
  const serialNum = req.body.serialNumber;
  Item.find({ itemName })
    .then(item => res.send(json(item)))
    .catch(err => console.log(`Error: ${this.err}`));
  // .then(items => res.render('stockAdmin.ejs', {title: 'Rendering Index', isLoggedOn: 'false', itemsList: items}));
});

// @route  GET stock/allItems
// desc    Get all Items
// @access Public
router.get('/allItems', (req, res, next) => {
  Item.find()
  .sort({totalCount: - 1 })
  .then(items => res.render('adminBoard.ejs', {title: 'Rendering Index', isLoggedOn: 'false', itemsList: items}));
});


// @route  POST stock/addItem
// desc    Add a new Item
// @access Public
router.post('/addItem', (req, res, next) => {
  Item.findOne({ name: req.body.name })
    .then(item => {
      if(item) {
        return res.status(400).json({ name: 'Item Already exists' });
      } else {
        // Fill Item.model with given information
        const newItem = new stockItem({
          name: req.body.name,
          description: req.body.description,
          totalCount: req.body.totalCount,
          onHand: req.body.onHand 
        });

        // Finally save Item to DB
        newItem.save()
        .then(item => res.json(`Added: ${item}`))
        .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
});

// TODO: needs testing
// @route  POST stock/remItem
// desc    Delete an Item
// @access Public
router.delete('/remItem/', (req, res, next) => {
  const itemName = req.body.name;
  const serialNum = req.body.serialNumber;
  Item.findById(itemName)
    .then(item => item.remove().then(() => res.json({ itemRemoved: true })))
    .catch(err => console.error(err) );
});

module.exports = router;

