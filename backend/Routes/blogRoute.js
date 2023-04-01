import mongoose from "mongoose";
import express from "express";
import {
  addBlog,
  blogDetail,
  getAllBlogs,
  updateBlog,
} from "../controllers/blogsController.js";
const blogRoute = express.Router();

blogRoute.route("/addBlog").post(addBlog);
blogRoute.route("/getAllBlogs").get(getAllBlogs);
blogRoute.route("/blogDetail/:id").get(blogDetail);
blogRoute.route("/updateBlog/:id").put(updateBlog);

export default blogRoute;
