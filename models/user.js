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
  email: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);