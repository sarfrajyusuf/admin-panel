import User from "../models/userModel.js";
import { decryption, encryption } from "../Config/crypto.js";
import { Validator } from "node-input-validator";
import {
  checkValidation,
  failed,
  fileUploadImage,
  success,
} from "../Config/helper.js";
import { generateToken } from "../Config/generateJWT.js";

const register = async (req, res) => {
  try {
    const v = new Validator(req.body, {
      image: "string",
      name: "required|string",
      email: "required|email",
      mobile: "required|integer",
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

    if (userExist.role !== 0 && !userExist.isApproved) {
      //role 0 superAdmin
      return res.status(400).json({
        status: 400,
        message: "You are not authorized",
        success: false,
      });
    } else {
      const password = decryption(userExist.password);
      if (password !== req.body.password) {
        return res
          .status(401)
          .json({ message: "Email or password doesn't match" });
      }
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

const managerLogin = async (req, res) => {
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

    if (userExist.role === 1) {
      const password = decryption(userExist.password);
      if (password !== req.body.password) {
        return res
          .status(401)
          .json({ message: "Email or password doesn't match" });
      }
    } else {
      return res.status(401).json({ message: "Not Authorized" });
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

const logout = async (req, res) => {
  try {
    let logoutUser = await User.updateOne(
      { _id: req.user._id },
      {
        $set: {
          loginTime: "0",
        },
      }
    );
    if (logoutUser) {
      return res.status(200).json({ status: 200, message: "Logout success" });
    } else {
      return res.status(404).json({ status: 404, message: "Not found" });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__logout");
    return res
      .status(400)
      .json({ status: 400, message: "Something went wrong" });
  }
};

const approvedByAdmin = async (req, res) => {
  try {
    if (req.body.isApproved === "true") {
      var approved = await User.findOneAndUpdate(
        { _id: req.body.id },
        {
          role: 1,
          isApproved: true,
        }
      );
    } else {
      console.log("huhuggjjjjfyjyyufyufyufyufyu");
      var notApproved = await User.findOneAndUpdate(
        { _id: req.body.id },
        {
          role: 11,
          isApproved: false,
        }
      );
    }

    let updatedStatus = await User.findById({ _id: req.body.id });
    console.log(updatedStatus);
    return res.status(200).json({
      status: 200,
      message: "Approval Success",
      body: updatedStatus,
    });
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+_ approvedByAdmin");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const adminProfile = async (req, res) => {
  try {
    if (req.user) {
      return res
        .status(200)
        .json({ status: 200, message: "Admin Profile", body: req.user });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+_ adminProfile");
    return res
      .status(400)
      .json({ status: 400, message: "Something went wrong" });
  }
};

const updateAdminProfileImg = async (req, res) => {
  try {
    // console.log('uuuuuuuuuuuuuuuuuuuuuuu', req.body);
    // return;
    const obj = JSON.parse(req.body.userData);
    // console.log(obj);
    // return;
    const user = await User.findByIdAndUpdate({ _id: req.user._id }, obj);

    if (req.files && req.files.image.name) {
      const image = req.files.image;
      if (image) {
        user.image = fileUploadImage(image, "adminImage") || user.image;
      }
    }
    user.name = obj.name || user.name;
    if (user) {
      const result = await user.save();
      return res.status(200).json({
        status: 200,
        message: "Admin Profile Image Updated",
        body: result,
      });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+_ updateAdminProfile");
    return res
      .status(400)
      .json({ status: 400, message: "Something went wrong" });
  }
};

const getAlluser = async (req, res) => {
  const { limit, page } = req.query;
  try {
    // console.log(req.body, "==================re")
    const users = await User.find({ role: { $ne: 0 } }).sort({ _id: -1 });

    const total = await User.find({ isAdmin: { $ne: "true" } }).count();

    const eventManagerCount = await User.find({ role: { $in: "1" } }).count();
    const admin = await User.find({ isAdmin: true });

    if (!users) {
      return res.status(400).json({
        status: 400,
        message: "Not Found Any User",
        success: false,
      });
    }
    // console.log(users, "=====================users");
    return res.status(200).json({
      status: 200,
      message: "All Users Details",
      body: { total, users, admin, eventManagerCount },
    });
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__getAlluser");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const eventManager = async (req, res) => {
  try {
    const eventManager = await User.find({ role: { $in: "1" } });
    const eventManagerCount = await User.find({
      isApproved: { $in: "true" },
    }).count();
    const admin = await User.find({ isAdmin: true });

    if (!eventManager) {
      return res.status(400).json({
        status: 400,
        message: "Not Found Any User",
        success: false,
      });
    }
    // console.log(users, "=====================users");
    return res.status(200).json({
      status: 200,
      message: "EventManager Details",
      body: { eventManager, eventManagerCount, admin },
    });
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__getAlluser");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const singleUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    // console.log(user);
    if (user) {
      return res.status(200).json({
        status: 200,
        message: "user details",
        body: user,
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "Not Found ", body: {} });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+singleUser");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const puchasedPlan = async (req, res) => {
  try {
    let plan = await User.findByIdAndUpdate(
      { _id: req.user._id },
      {
        planType: req.body.planType,
        planPurchase: true,
      }
    );
    if (plan) {
      return res.status(200).json({
        status: 200,
        message: "Plan Purchased Successfully",
        body: plan,
      });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Plan is not Purchased", body: plan });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+= puchasePlan");

    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const searchUser = async (req, res) => {
  console.log(req.body);
  // return;
  const user = await User.find({
    name: { $regex: req.body.name, $options: "i" },
    isAdmin: { $ne: "true" },
  });

  return success(res, "get data ", {
    user,
  });
};

const createSubAdmin = async (req, res) => {
  // return;
  try {
    const v = new Validator(req.body, {
      image: "string",
      name: "required|string",
      email: "required|email",
      mobile: "required|integer",
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

    const user = await User.create({
      ...req.body,
      password: encryption(req.body.password),
      managerId: req.body.managerId,
    });

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

export {
  register,
  login,
  getAlluser,
  logout,
  eventManager,
  singleUser,
  adminProfile,
  updateAdminProfileImg,
  approvedByAdmin,
  puchasedPlan,
  searchUser,
  createSubAdmin,
  managerLogin,
};
