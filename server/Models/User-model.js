const mongoose = require("mongoose");

const USER_SCHEMA = new mongoose.Schema(
  {
    UserName: {
      type: String,
      trim: true,
      unique: true,
    },
    Password: {
      type: String,
      trim: true,
     },
    Admin: { type: Boolean, default: false },
    Email: {
      type: String,
      lowercase: true,
     },
    Image: { type: String, default: "https://did.li/yWjaa" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", USER_SCHEMA);
