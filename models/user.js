const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: true, unique: true },
  password: {type: String, required: true },
  username: {type: String, required: true },
});

// Virtual for user's URL
userSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/home/user/${this._id}`;
});

// Mongoose middleware to delete related entities before deleting a user
userSchema.pre('remove', async function(next) {
  const user = this;

  // Use Promise.all to execute deletion operations concurrently
  await Promise.all([
    Budget.deleteMany({ user: user._id }),
    Card.deleteMany({ user: user._id }),
    Category.deleteMany({ user: user._id }),
    Ledger.deleteMany({ user: user._id }),
    Transaction.deleteMany({ user: user._id }),
  ]);

  // Continue with the removal of the user
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;