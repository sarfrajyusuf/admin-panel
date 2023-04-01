import OrganizationManager from "../../models/webModels/organizationModel.js";
import { Validator } from "node-input-validator";
import {
  checkValidation,
  failed,
  fileUploadImage,
  success,
} from "../../Config/helper.js";
import { encryption } from "../../Config/crypto.js";

const createOrganization = async (req, res) => {
  try {
    const objFiles = req.files.image;
    const v = new Validator(req.body, {
      name: "required|string",
      organizationName: "required|string",
      image: "string",
      phoneNumber: "required|integer",
      email: "required|email",
      organizationAddress: "required|string",
      password: "required|string",
      confirmPassword: "required|string|same:password",
    });
    const Values = JSON.parse(JSON.stringify(v));
    const errorResponse = await checkValidation(v);
    if (errorResponse) return failed(res, errorResponse);

    const userExist = await OrganizationManager.findOne({
      email: Values.inputs.email,
    });
    if (userExist) {
      return res.status(400).json({
        status: 400,
        message: "user already exist",
        success: false,
      });
    }
    if (req.files && req.files.image.name) {
      const image = objFiles;
      if (image) {
        req.body.image = fileUploadImage(image, "orgImages");
      }
    }
    const user = await OrganizationManager.create({
      ...req.body,
      password: encryption(req.body.password),
    });
    console.log(user, "==================created");
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

export { createOrganization };
