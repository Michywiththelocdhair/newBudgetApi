const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String },
  budgeted_amount: { type: Number, default: 0 },
});

categorySchema.virtual("url").get(function () {
  return `/home/category/${this._id}`
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
