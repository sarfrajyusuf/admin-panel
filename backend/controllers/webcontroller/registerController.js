import User from "../../models/webModels/register.js";
import { decryption, encryption } from "../../Config/crypto.js";
import { Validator } from "node-input-validator";
import { checkValidation, failed, success } from "../../Config/helper.js";
import { generateToken } from "../../Config/generateJWT.js";
// import { nodemailer } from "nodemailer";
// import { randomstring } from "randomstring";

const registerUser = async (req, res) => {
  try {
    const v = new Validator(req.body, {
      name: "required|string",
      email: "required|email",
      mobile: "required|integer",
      organization: "required|string",
      password: "required|string",
      confirmPassword: "required|string|same:password",
    });
    const Values = JSON.parse(JSON.stringify(v));
    const errorResponse = await checkValidation(v);
    if (errorResponse) return failed(res, errorResponse);

    const userExist = await User.findOne({ email: Values.inputs.email });
    if (userExist) {
      return res.status(400).json({
        status: 400,
        message: "user already exist",
        success: false,
      });
    }

    // return;
    const user = await User.create({
      ...req.body,
      password: encryption(req.body.password),
    });
    // console.log(user, "==================created");
    return res.status(201).json({
      status: 201,
      message: "user register successfully",
      body: user,
    });
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+_register");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

//-------------LOGIN--------------------------//
const login = async (req, res) => {
  try {
    const v = new Validator(req.body, {
      email: "required|email",
      password: "required",
    });
    const Values = JSON.parse(JSON.stringify(v));
    const errorResponse = await checkValidation(v);
    if (errorResponse) {
      return failed(res, errorResponse);
    }

    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({
        status: 400,
        message: "user doesn't exist",
        success: false,
      });
    }

    const Password = decryption(userExist.password);
    if (Password !== req.body.password) {
      return res
        .status(401)
        .json({ message: "Email or password doesn't match" });
    }

    let Token = await generateToken(userExist._id);
    await User.findOneAndUpdate(
      //here we update  our login time
      { _id: userExist._id },
      {
        $set: {
          loginTime: (await Token).time,
        },
      }
    );
    return res.status(200).json({
      status: 200,
      message: "Logged in Success",
      body: {
        userExist,
        token: (await Token).token,
        loginTime: (await Token).time,
      },
    });
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__login");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

//---------------profile--------------//
const Profile = async (req, res) => {
  try {
    if (req.user) {
      return res
        .status(200)
        .json({ status: 200, message: "Profile", body: req.user });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+_ adminProfile");
    return res
      .status(400)
      .json({ status: 400, message: "Something went wrong" });
  }
};

const forgetPassword = async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.body.email });
    if (userData) {
    } else {
      res.status(200).send({ success: false, msg: "this email is not exist" });
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};
export { registerUser, login, Profile };
