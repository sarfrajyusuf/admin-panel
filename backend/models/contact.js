// const mongoose = require("mongoose");
// const schema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "name is required"],
//     },
//     email: {
//       type: String,
//       required: [true, "email is required"],
//     },
//     phone: {
//       type: String,
//       required: [true, "phone is required"],
//     },
//     subject: {
//       type: String,
//       required: [true, "subject is required"],
//     },
//     message: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// module.exports = mongoose.model("contact", schema);
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    subject: {
      type: String,
      required: [true, "subject is required"],
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default new mongoose.model("Contact", contactSchema);
