const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");


const budgetSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: {type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  amount: { type: Number, required: true },
  description: { type: String },
  card: { type: Schema.Types.ObjectId, ref: 'Card', required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }], 
});

budgetSchema.virtual('url').get(function() {
  return `/home/budget/${this._id}`;
});

budgetSchema.virtual("start_date_formatted").get(function () {
  return DateTime.fromJSDate(this.start_date).toLocaleString(DateTime.DATE_MED);
});

budgetSchema.virtual("end_date_formatted").get(function () {
  return DateTime.fromJSDate(this.end_date).toLocaleString(DateTime.DATE_MED);
});



const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
