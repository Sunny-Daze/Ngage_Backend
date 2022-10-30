import User from "../schema/user-schema.js";

export const userRegister = (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already exists!" });
    } else {
      const receivedData = req.body;
      const validatedUser = new User(receivedData);
      validatedUser.save();
      res.send({ message: "User successfully registered!" });
    }
  });
};

export const userLogin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Succesfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered!", e });
    }
  });
};

// export const userLogin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     await User.findOne({ email: email }, (err, user) => {
//       if (user) {
//         if (password === user.password) {
//           res.send({ message: "Login Succesfull", user: user });
//         }
//         else{
//             res.send({ message: "Password didn't match"})
//         }
//       }
//       else{
//         res.send({message : "User not registered!", e});
//       }
//     });
//   } catch (e) {
//     res.send({messae : "Error Logging in the user", e});
//   }
// };
