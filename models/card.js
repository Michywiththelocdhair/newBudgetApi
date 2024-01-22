const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  card_name: { type: String, required: true },
  amount: { type: Number, default: 0 },
});

cardSchema.virtual("url").get(function () {
  return `/home/card/${this._id}`;
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
