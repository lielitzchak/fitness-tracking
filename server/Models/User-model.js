const mongoose = require("mongoose");

// "email":string"joy.ashknaziy317@tin.dev"
// "firstName":string"Joy"
// "lastName":string"Ashknaziy"
// "phone":string"+260 87 233 9492"
// "img":string"https://i.pravatar.cc/100"
// "username":string"Joy_Ashknaziy49"
// "address":{5 items
// "street":string"712 Cade Forks"
// "city":string"Williemouth"
// "zipCode":string"46678-8261"
// "county":string"Leicestershire"
// "country":string"French Southern Territories"

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
      unique: true,
    },
    Image: { type: String, default: "https://did.li/yWjaa" },
    IsLogin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", USER_SCHEMA);
