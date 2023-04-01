import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema(
  {
    image: { type: String },
    name: { type: String },
    phoneNumber: { type: String },
    organizationName: { type: String },
    organizationLogo: { type: String },
    organizationEmail: { type: String },
    organizationAddress: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
    // description: { type: String },

    createdByUser: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  },
  {
    timestamps: true,
  }
);

export default new mongoose.model("Organization", organizationSchema);
