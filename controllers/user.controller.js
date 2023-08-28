const User = require("../models/user")
const { StatusCodes } = require("http-status-codes")
const CustomError = require("../errors")

const registerUser = async (req, res) => {
 const { name, password } = req.body;

 if (!name || !password) {
  throw new CustomError.BadRequestError("Please provide name and password");
 }

 const user = await User.create({ name: name, password: password });
 res.status(StatusCodes.CREATED).json({ user });

};


const loginUser = async (req, res) => {

 const { name, password } = req.body


 let user = await User.findOne({ name: name, password: password })
 if (!name || !password) {
  throw new CustomError.BadRequestError("Please login First")
 }
 else if (!user) {
  throw new CustomError.NotFoundError("Invalid Credentials")
 } else {
  res.status(StatusCodes.OK).json({ user, msg: `Hello ${name} ,thanks for your testing , and have a nice day` })
 }
}





module.exports = {
 registerUser,
 loginUser,
}