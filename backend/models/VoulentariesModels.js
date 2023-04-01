import mongoose from 'mongoose';

const Voulentaries = new mongoose.Schema(
  {
    image: { type: String },
    name: { type: String, required: false },
    role: { type: Number, required: false, default: 11 }, // 0. SuperAdmin / 1. subAdmin / 2. user/member
    email: { type: String, required: false, unique: true },
    password: { type: String, required: false },
    mobile: { type: Number, required: false },
    isAdmin: { type: Boolean, required: false, default: false },
    isApproved: { type: Boolean, required: false, default: false },
    planType: { type: Number, enum: [0, 1, 2, 11], default: 11 }, // 0. oneMonth / 1. sixMonth / 2. oneYear
    planPurchase: { type: Boolean, default: false },
    loginTime: { type: String, default: false },
  },

  {
    timestamps: true,
  }
);

export default new mongoose.model('voulentaries', Voulentaries);
