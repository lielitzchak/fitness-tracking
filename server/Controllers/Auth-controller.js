const usersModel = require("../Models/User-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/User-model");
module.exports = {
  register: async (request, response) => {
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
              console.log(err);
              response.status(500).send(err);
            });
        });
  },
  login: (request, response) => {
    const { Email, Password } = request.body;
    usersModel
      .findOne({
        Email: Email,
      })
      .exec((err, user) => {
        if (err) {
          response.status(500).send({ message: err });
          return;
        }
        if (!user) {
          return response.status(404).send({ message: "User Not found." });
        }
        console.log(
          `request.body.Password :${Password}, user.Password:${user.Password}`
        );
        bcrypt
          .compare(Password, user.Password)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
        // let token = jwt.sign({ id: user.id }, config.secret, {
        //   expiresIn: 86400, // 24 hours
        // });
        // let authorities = [];
        // for (let i = 0; i < user.roles.length; i++) {
        //   authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
        // }
        // request.session.token = token;
        // response.status(200).send({
        //   id: user._id,
        //   username: user.UserName,
        //   email: user.Email,
        //   roles: authorities,
        // });
      });
  },
  login: async (request, response) => {
    console.log(request.body);
    if (usersModel.exists({ email: request.body.email }) === false) {
      return response.status(401).json({ message: "Email already exists" });
    }
    usersModel.findOne({ email: request.body.email }).then((user) => {
      bcrypt
        .compare(request.body.password, user.password)
        .then((isMatch) => {
          if (!isMatch)
            return response
              .status(403)
              .json({ message: "Invalid credentials" });
          user.isLogin = true;
          jwt.sign(
            { user },
            process.env.JWT_SECRET,
            { expiresIn: "30m" },
            (err, token) => {
              if (err)
                return response
                  .status(500)
                  .json({ message: "Error logging in user" });
              return response
                .status(200)
                .json({ message: "User logged in successfully", token });
            }
          );
        })
        .catch((error) =>
          response.status(500).json({ message: "Error logging in user", error })
        );
    });
  },
};
