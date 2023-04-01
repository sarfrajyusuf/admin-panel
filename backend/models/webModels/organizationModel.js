import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema(
  {
    image: { type: String },
    name: { type: String },
    phoneNumber: { type: String },
    organizationName: { type: String },
    // organizationLogo: { type: String },
    email: { type: String },
    organizationAddress: { type: String },
    password: { type: String },

    // createdByUser: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  {
    timestamps: true,
  }
);

export default new mongoose.model("OrgManager", organizationSchema);
