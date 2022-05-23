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
      required: true,
    },
    Admin: { type: Boolean, default: false },
    Email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    Image: { type: String, default: "https://did.li/yWjaa" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
