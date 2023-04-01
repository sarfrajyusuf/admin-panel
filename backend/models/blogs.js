import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema(
  {
    image: { type: String },
    video: { type: String },
    title: { type: String },
    contant: { type: String },
    type: { type: Number, enum: [1, 2], default: 1 }, // 1 fro blog, 2 for news
  },
  {
    timestamps: true,
  }
);

export default new mongoose.model("Blogs", blogsSchema);
