// const contact = require("../../models/webModels/contactModel");
// const { error, success } = require("../../Config/helper");
// //===================create contact============================//
// module.exports.createContact = async (req, res) => {
//   //   try {
//   //     // const { firstName, lastName, phone, address,message } = req.body;
//   //     const userData = await contact.create(req.body);
//   //     if (!userData) {
//   //       return RESPONCE.ERROR(res, "contact not inserted", userData);
//   //     } else {
//   //       return RESPONCE.SUCCESS(res, "contact created successfully", userData);
//   //     }
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   try {
//     let result = await contact.create(req.body);
//     return success(res, " Successfull", result);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

import { error, success } from "../../Config/helper.js";
import contact from "../../models/webModels/contactModel.js";
// const contact = require("../models/contact");
export const createContact = async (req, res) => {
  try {
    let result = await contact.create(req.body);
    // return success(res, "Successfull", result);
    return res.status(201).json({
      status: 201,
      message: "Successfull",
      body: result,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
