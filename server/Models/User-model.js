const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    UserName: {
      type: String,
      trim: true,
      unique: true,
    },
    Password: {
      type: String,
      trim: true,
      required: true,
    },
    Admin: { type: Boolean, default: false },
    Email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    Image: { type: String, default: "https://did.li/yWjaa" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
