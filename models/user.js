var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique: true },
  isAdmin: {type: Boolean, default: false},
  settings: {
    version: String,
    font: {
      family: String,
      size: Number
    }
  },
  topTwo: {
    saved: { type: Array, default: [] },
    notes: { type: Array, default: [] },
    journal: { type: Array, default: [] }
  },
  streak: {
    days: {type: Number, default: 1},
    date: {type: Date, default: new Date() }
  }
});

UserSchema.plugin(passportLocalMongoose, {usernameQueryFields: ['email']});

module.exports = mongoose.model("User", UserSchema);