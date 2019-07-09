var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  isAdmin: {type: Boolean, default: false},
  settings: {
    version: String,
    font: {
      family: String,
      size: Number
    }
  },
  name: String,
  email: String,
  streak: {
    days: {type: Number, default: 1},
    date: {type: Date, default: new Date() }
  }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);