const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ledgerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: {type:String, required: true},
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
});

ledgerSchema.virtual("url").get(function () {
  return `/home/ledger/${this._id}`;
});

const Ledger = mongoose.model('Ledger', ledgerSchema);
module.exports = Ledger;