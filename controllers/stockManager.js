/* @Desc: Add, Update, Find and Remove stockItems.
*
*
*
*/

// Imports
const mongoose = require('mongoose');
const itemModel = require('../models/stockItem').ItemSchema;

class stockManager {
  viewItem (Item)
    {
      Item.find()
      .sort({totalCount: - 1 })
      .then(items => res.render('adminBoard.ejs', {title: 'Rendering Index', isLoggedOn: 'false', itemsList: json(items)}));
    }
  addItem (name, totalCount, desc, onHand)
    {
      Item.find()
      .sort({totalCount: - 1 })
      .then(items => res.render('adminBoard.ejs', {title: 'Rendering Index', isLoggedOn: 'false', itemsList: json(items)}));
    }
}


module.exports = stockManager;