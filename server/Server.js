let result = require("dotenv").config();
if (result.error) {
  console.log(result.error);
}
const express = require("express");
const app = express();
const cors = require("cors");
require("./DB/db");
const TRAINING = require("./Routes/Training.js");
//! const passport = require("passport");
//! require("./Config/passport")(passport);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(passport.initialize());
// app.use("/Api", authRoutes);
// app.use("/Api", usersRoutes);
// app.use("/Api", groupsRoutes);
// app.use("/Api", productsRoutes);

// app.use('/Api',passport.authenticate('jwt',{session:false}),usersRoutes);
// app.use('/Api',passport.authenticate('jwt',{session:false}),productsRoutes);
// app.use('/Api',passport.authenticate('jwt',{session:false}),groupsRoutes);

const port = process.env.PORT || 1010;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}
