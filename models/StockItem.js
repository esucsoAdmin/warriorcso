/* Stock Item Schema model
*
* Name: String req.
* Description: String
* totalCount: int req.
* OnHand: int
* 
*/

const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  serialNumber: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  Notes: {
    type: String,
    required: false 
  },
  onHand: {
    type: Boolean,
    required: false
  }

});

module.exports = Item = mongoose.model('stockItem', ItemSchema);