const UserModel = require("../Models/User-model");
const bcrypt = require("bcrypt");
module.exports = {
  getAllUsers: (request, response) => {
    UserModel.find()
      .then((data) => {
        data.length == 0
          ? response.status(404).json({ message: "No users found" })
          : response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  getUserById: (request, response) => {
    UserModel.findById(request.params.id)
      .then((data) => {
        if (data == null || data == undefined || data == "") {
          return response.status(404).json({ message: "No user found" });
        }
        return response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  createUser: (request, response) => {
    console.log(request.body.Password);
    bcrypt.hash(request.body.Password, 10, async (err, hashPassword) => {
      if (err) return response.status(500).json({ message: err.message });
      request.body.Password = hashPassword;
      await UserModel
        .create(request.body.user)
        .then((result) =>
          response
            .status(201)
            .json({ massage: "user added successfully", result })
        )
        .catch((err) => response.status(500).json(err));
    });
  },
  updateUser: (request, response) => {
    UserModel.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then((data) => {
        data == null || data == undefined
          ? response.status(404).json({ message: "No user found" })
          : response.status(201).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  deleteUser: (request, response) => {
    UserModel.findByIdAndDelete(request.params.id)
      .then((data) => {
        data == null || data == undefined
          ? response.status(404).json({ message: "No user found" })
          : response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
};
