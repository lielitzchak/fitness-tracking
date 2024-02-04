const USER_MODEL = require("../Models/User-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/User-model");
// const { use } = require("bcrypt/promises");
module.exports = {
  getAllUsers: (requestFromUser, responseFromServer) => {
    USER_MODEL.find()
      .then((dataUser) => {
        if (dataUser.length == 0)
          return responseFromServer
            .status(404)
            .json({ Message: "No users found" });
        responseFromServer.status(200).json(dataUser);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  getUserById: (requestFromUser, responseFromServer) => {
    USER_MODEL.findById(requestFromUser.params.id)
      .then((dataUser) => {
        if (CheckIfUserExists(dataUser))
          return responseFromServer
            .status(404)
            .json({ Message: "No user found" });
        return responseFromServer.status(200).json(dataUser);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  getUserByEmail: (requestFromUser, responseFromServer) => {
    const { Email, Password } = requestFromUser.params;
    USER_MODEL.findOne({ Email })
      .then((dataFromDB) => {
        if (CheckIfUserExists(dataFromDB)) {
          bcrypt.compare(Password, dataFromDB.Password, (err, isMatch) => {
            if (err)
              return responseFromServer
                .status(400)
                .send({ message: "error in pas" });

            if (!isMatch) {
              return responseFromServer
                .status(403)
                .send({ message: "Password incorrect" });
            }
            jwt.sign(
              { Email, Password },
              process.env.SECRET_KEY,
              { expiresIn: "3d" },
              (err, accessToken) => {
                if (err)
                  return responseFromServer
                    .status(400)
                    .send({ Error: `the err is: ${err}` });
                responseFromServer
                  .status(200)
                  .send({ message: "Login Successfully", accessToken });
                user.isLogin = true;
                user.save();
              }
            );
            // jwt.sign(
            //   {
            //     email: user.email,
            //     id: user._id,
            //   },
            //   process.env.SECRET_KEY,
            //
            //   (err, accessToken) => {
            //
            //   }
            // );

            // if (err) {
            //   return console.log(`error ${err}`);
            // }
            // if (isMatch) {
            //   return console.log(`isMatch ${isMatch}`);
            // }
          });
        }

        //       return responseFromServer
        //         .status(404)
        //         .json({ Message: "No user found" });
        //     bcrypt.compare(
        //       requestFromUser.Password,
        //       dataFromServer.Password,
        //       (err, isMatch) => {
        //         if (isMatch) return console.log(`${isMatch} isMatch`);
        //         if (err) return console.log(`${err} err`);
        //       }
        //     );
        // console.log(dataFromServer.Password);
        // return responseFromServer.status(200).json(dataFromServer);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
  createUser: (requestFromUser, responseFromServer) => {
     UserModel.create(requestFromUser.body)
      .then((dataFromUser) => {
        responseFromServer.status(201).json(dataFromUser);
      })
      .catch((err) => {
        responseFromServer.status(500).json({ Message: err });
      });
    // bcrypt.hash(
    //   requestFromUser.body.Password,
    //   10,
    //   async (error, hashPassword) => {
    //     if (error)
    //       return responseFromServer
    //         .status(500)
    //         .json({ Message: error.Message });
    //     requestFromUser.body.Password = hashPassword;
    //     await USER_MODEL.create(requestFromUser.body)
    //       .then((result) =>
    //         responseFromServer
    //           .status(201)
    //           .json({ massage: "user added successfully", result })
    //       )
    //       .catch((err) => responseFromServer.status(500).json(err));
    //   }
    // );
  },
  updateUser: (requestFromUser, responseFromServer) => {
    USER_MODEL.findByIdAndUpdate(
      requestFromUser.params.id,
      requestFromUser.body,
      { new: true }
    )
      .then((data) => {
        data == null || data == undefined
          ? responseFromServer.status(404).json({ Message: "No user found" })
          : responseFromServer.status(201).json(data);
      })
      .catch((err) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: err,
        });
      });
  },
  deleteUser: (requestFromUser, responseFromServer) => {
    USER_MODEL.findByIdAndDelete(requestFromUser.params.id)
      .then((dataFromServer) => {
        if (CheckIfUserExists(dataFromServer))
          return responseFromServer
            .status(404)
            .json({ Message: "No user found" });
        return responseFromServer.status(200).json(dataFromServer);
      })
      .catch((error) => {
        responseFromServer.status(500).json({
          Message: "Error",
          error: error,
        });
      });
  },
};
const CheckIfUserExists = (dataUser) => {
  return dataUser != null || dataUser != undefined || dataUser != "";
};
