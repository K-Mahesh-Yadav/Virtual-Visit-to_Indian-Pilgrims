const mongoose = require("mongoose");
const Rschema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
    },
    email: {
      type: String,
      requried: true,
    },
    password: {
      type: String,
      requried: true,
    },
    mobile: {
      type: Number,
      requried: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "users" }
);
module.exports = mongoose.model("rschema", Rschema);
