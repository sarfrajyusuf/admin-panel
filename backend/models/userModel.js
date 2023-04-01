import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    image: { type: String },
    name: { type: String },
    role: { type: Number, enum: [0, 1, 2, 11], default: 11 }, // 0. SuperAdmin / 1. subAdmin / 2. user/member
    email: { type: String, unique: true },
    password: { type: String },
    mobile: { type: Number },
    isAdmin: { type: Boolean, default: true },
    isApproved: { type: Boolean, default: true },
    planType: { type: Number, enum: [0, 1, 2, 11], default: 11 }, // 0. basic / 1. standared / 2. premium
    planPurchase: { type: Boolean, default: false },
    organization: {
      type: String,
      required: true,
    },
    planId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "plan",
      default: null,
    },
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      default: null,
    },
    loginTime: { type: String, default: false },
  },

  {
    timestamps: true,
  }
);

export default new mongoose.model("Users", User);
