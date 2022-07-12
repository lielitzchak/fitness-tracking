const USER_MODEL = require("../Models/User-model");
const bcrypt = require("bcrypt");
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
    console.log(requestFromUser.params);
    USER_MODEL.findOne({ Email: requestFromUser.params.Email })
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
  createUser: (requestFromUser, responseFromServer) => {
    console.log(requestFromUser.body);
    bcrypt.hash(
      requestFromUser.body.Password,
      10,
      async (error, hashPassword) => {
        if (error)
          return responseFromServer
            .status(500)
            .json({ Message: error.Message });
        requestFromUser.body.Password = hashPassword;
        await USER_MODEL.create(requestFromUser.body)
          .then((result) =>
            responseFromServer
              .status(201)
              .json({ massage: "user added successfully", result })
          )
          .catch((err) => responseFromServer.status(500).json(err));
      }
    );
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
function CheckIfUserExists(dataUser) {
  return dataUser == null || dataUser == undefined || dataUser == "";
}
