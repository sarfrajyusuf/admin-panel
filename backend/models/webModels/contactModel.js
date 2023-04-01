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
    mobile: {
      type: String,
      required: [true, "mobile is required"],
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
