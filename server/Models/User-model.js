const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    Username: {
      type: String,
      trim: true,
    },
    Password: {
      type: String,
      trim: true,
    },
    Admin: Boolean,
    Email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
