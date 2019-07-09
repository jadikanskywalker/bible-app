var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  isAdmin: {type: Boolean, default: false},
  settings: {
    version: String,
    font: {
      family: String,
      size: Number
    }
  },
  topThree: {
    saved: [ String ],
    notes: [ String ],
    journal: [ String ]
  },
  streak: {
    days: {type: Number, default: 1},
    date: {type: Date, default: new Date() }
  }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);