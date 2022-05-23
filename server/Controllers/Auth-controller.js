const usersModel = require("../Models/User-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  register: async (request, response) => {
    const { Email, Username, Admin, Password } = request.body;
    if (!(await usersModel.exists({ Username: Username }))) {
      console.log({ Email: Email });
      return response.status(300).send({ message: "Email Already Exists" });
    } else {
      bcrypt.hash(Password, 10, async (err, hashPassword) => {
        console.log(err);
        if (err) {
          response.status(400).send({ message: err });
        } else {
          request.body.Password = hashPassword;
          await usersModel
            .create(request.body)
            .then((user) => {
              response.status(200).send({
                message: "User has been Added and Signed Up successfully",
                user,
              });
            })
            .catch((error) => {
              response.status(500).send(error);
              // console.log(request.body);
            });
        }
      });
      // }
    }
  },
};
// login: async (request, response) => {
//   if (usersModel.exists({ email: request.body.email }) === false) {
//     return response.status(401).json({ message: "Email already exists" });
//   }
//   usersModel.findOne({ email: request.body.email }).then((user) => {
//     bcrypt
//       .compare(request.body.password, user.password)
//       .then((isMatch) => {
//         if (!isMatch)
//           return response
//             .status(403)
//             .json({ message: "Invalid credentials" });
//         user.isLogin = true;
//         jwt.sign(
//           { user },
//           process.env.JWT_SECRET,
//           { expiresIn: "30m" },
//           (err, token) => {
//             if (err)
//               return response
//                 .status(500)
//                 .json({ message: "Error logging in user" });
//             return response
//               .status(200)
//               .json({ message: "User logged in successfully", token });
//           }
//         );
//       })
//       .catch((error) =>
//         response.status(500).json({ message: "Error logging in user", error })
//       );
//   });
// }
