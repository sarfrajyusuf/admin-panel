import { Validator } from "node-input-validator";
import {
  checkValidation,
  failed,
  fileUpload,
  fileUploadImage,
} from "../Config/helper.js";
import Blogs from "../models/blogs.js";

const addBlog = async (req, res) => {
  try {
    const objFiles = req.files.image;
    let videoUpload = await fileUpload(req.files);
    // return;
    const v = new Validator(req.body, {
      title: "string|required",
      contant: "string",
      image: "string",
      video: "string",
    });

    const errorResponse = await checkValidation(v);
    if (errorResponse) return failed(res, errorResponse);

    if (req.files && req.files.image.name) {
      const image = objFiles;
      if (image) {
        req.body.image = fileUploadImage(image, "blogImages");
      }
    }
    const blog = await Blogs.create({
      ...req.body,
      contant: req.body.contant,
      video: videoUpload,
    });

    if (blog) {
      return res.status(201).json({
        status: 201,
        message: "Blog Created Successfully",
        body: blog,
      });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__ addBlog");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blogs.find();
    const total = await Blogs.find().count();

    if (allBlogs) {
      return res.status(200).json({
        status: 200,
        message: "All Blog's",
        body: { allBlogs, total },
      });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__ getAllBlogs");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const blogDetail = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);

    if (blog) {
      return res.status(200).json({
        status: 200,
        message: "Blog Details",
        body: blog,
      });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__ getblog");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blogs.findByIdAndUpdate(req.params.id, req.body);

    if (blog) {
      return res.status(200).json({
        status: 200,
        message: "Blog Details",
        body: blog,
      });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__ getblog");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

export { addBlog, getAllBlogs, blogDetail, updateBlog };
