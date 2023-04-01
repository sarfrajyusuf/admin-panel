import Voulentaries from '../models/VoulentariesModels.js';
import { Validator } from 'node-input-validator';
import { checkValidation, failed, success } from '../Config/helper.js';
import { encryption } from '../Config/crypto.js';

const createVoulentaries = async (req, res) => {
  try {
    const v = new Validator(req.body, {
      image: 'string',
      name: 'required|string',
      email: 'required|email',
      mobile: 'required|integer',
      password: 'required|string',
      confirmPassword: 'required|string|same:password',
    });
    const Values = JSON.parse(JSON.stringify(v));
    const errorResponse = await checkValidation(v);
    if (errorResponse) return failed(res, errorResponse);

    const userExist = await Voulentaries.findOne({
      email: Values.inputs.email,
    });
    if (userExist) {
      return res.status(400).json({
        status: 400,
        message: 'user already exist',
        success: false,
      });
    }
    const user = await Voulentaries.create({
      ...req.body,
      password: encryption(req.body.password),
    });
    // console.log(user, "==================created");
    return res.status(201).json({
      status: 201,
      message: 'user register successfully',
      body: user,
    });
  } catch (error) {
    console.log(error, '+_+_++++_+_+_+_+_+_+_+_+__+_+_+_register');
    return res.status(500).json({
      status: 500,
      message: 'Something Went Wrong',
      body: {},
    });
  }
};

const getAllVoulentaries = async (req, res) => {
  try {
    let allVoulentaries = await Voulentaries.find({ role: { $in: '2' } });

    let total = await Voulentaries.find({ role: 2 }).count();
    if (allVoulentaries) {
      return res.status(200).json({
        status: 200,
        message: 'All voulentaries',
        body: { allVoulentaries, total },
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: 'Not Found ', body: {} });
    }
  } catch (error) {
    console.log(error, '+_+_++++_+_+_+_+_+_+_+_+__+_+_+__createMission');
    return res.status(500).json({
      status: 500,
      message: 'Something Went Wrong',
      body: {},
    });
  }
};

const singleVolunteer = async (req, res) => {
  try {
    let user = await Voulentaries.findById(req.params.id);
    // console.log(user);
    if (user) {
      return res.status(200).json({
        status: 200,
        message: 'user details',
        body: user,
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: 'Not Found ', body: {} });
    }
  } catch (error) {
    console.log(error, '+_+_++++_+_+_+_+_+_+_+_+__+_+_+singleUser');
    return res.status(500).json({
      status: 500,
      message: 'Something Went Wrong',
      body: {},
    });
  }
};

const searchVolunteer = async (req, res) => {
  console.log(req.body);
  // return;
  const user = await Voulentaries.find({
    name: { $regex: req.body.name, $options: 'i' },
    isAdmin: { $ne: 'true' },
  });

  return success(res, 'get data ', {
    user,
  });
};

export {
  getAllVoulentaries,
  createVoulentaries,
  singleVolunteer,
  searchVolunteer,
};
