const UserRouter = require("express").Router();
const UserModel = require("../models/User");

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
    UserModel.create(request.body)
      .then((data) => {
        response.status(200).json(data);
      })
      .catch((err) => {
        response.status(500).json({
          message: "Error",
          error: err,
        });
      });
  },
  updateUser: (request, response) => {
    UserModel.findByIdAndUpdate(request.params.id, request.body, { new: true })
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
