import mongoose from 'mongoose';

const planSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    planType: { type: Number, enum: [0, 1, 2], required: true },
    discount: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    volunteer: { type: String, required: true },
    limit: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default new mongoose.model('plan', planSchema);
