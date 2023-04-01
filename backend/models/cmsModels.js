import mongoose from "mongoose";

const cmsSchema = new mongoose.Schema(
  {
    title: { type: String },
    content: { type: String },
  },
  {
    timestamps: true,
  }
);

export default new mongoose.model("Cms", cmsSchema);
