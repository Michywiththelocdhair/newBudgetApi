const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const transactionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  budget: { type: Schema.Types.ObjectId, ref: 'Budget' },
  card: { type: Schema.Types.ObjectId, ref: 'Card', required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  amount: { type: Number, required: true },
  transaction_type: { type: String, enum: ['income', 'expense', 'transfer'], required: true },
  date: { type: Date, default: Date.now },
  description: { type: String },
});

transactionSchema.virtual("url").get(function () {
  return `/home/transaction/${this._id}`;
});

transactionSchema.virtual("date_formatted").get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
});


const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
