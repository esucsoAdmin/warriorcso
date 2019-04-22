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
  },
  Notes: {
    type: String,
  },
  onHand: {
    type: Boolean,
  }

});

module.exports = Items = mongoose.model('stockItem', ItemSchema);