const usersModel = require("../Models/User-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/User-model");
module.exports = {
  Register: async (request, response) => {
    const { Email, Username, Admin, Password } = request.body;

    (await usersModel.exists({ Email: Email }))
      ? response
          .status(300)
          .send({ message: `this Email (${Email}) Already Exists` })
      : bcrypt.hash(Password, 10, async (err, hashPassword) => {
          if (err) {
            response.status(402).send({ message: err });
          }
          request.body.Password = hashPassword;
          await UserModel.create(request.body)
            .then((user) => {
              jwt.sign(
                { Email: user.Email, id: user._id },
                process.env.SECRET_KEY,
                { expiresIn: "90" },
                (err, accessToken) => {
                  if (err)
                    return response.status(400).send({ Error: `${err}` });
                  response.status(201).send({
                    message: `User has been Added and Signed Up Successfully  `,
                    user,
                    accessToken,
                  });
                  usersModel.save();
                }
              );
            })
            .catch((err) => {
              response.status(500).send(err);
            });
        });
  },
  Login: (request, response) => {
    const { Email, Password } = request.body;
    usersModel
      .findOne({
        Email: Email,
      })
      .exec((err, user) => {
        if (err) {
          return response.status(500).send({ message: err });
        }
        if (!user) {
          return response.status(404).send({ message: "User Not found." });
        }
        bcrypt
          .compare(Password, user.Password)
          .then((result) => result)
          .catch((err) => err);
      });
  },
};
