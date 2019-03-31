/* Stock Item Schema model
*
* Name: String req.
* Description: String
* totalCount: int req.
* OnHand: int
* 
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  totalCount: {
    type: Number,
    required: true
  },
  description: {
    type: Number,
    required: false
  },

});

module.exports = Item = mongoose.model('stockItem', ItemSchema)