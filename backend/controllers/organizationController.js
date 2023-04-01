import { fileUploadImage } from "../Config/helper.js";
import Organization from "../models/organizationModel.js";

const createOrganisation = async (req, res) => {
  try {
    const objFiles = req.files.image;

    if (req.files && req.files.image.name) {
      const image = objFiles;
      if (image) {
        req.body.image = fileUploadImage(image, "organizationImage");
      }
    }
    // console.log(req.body, "=============body");
    // return;
    let organi = await Organization.create({
      image: req.body.image,
      name: req.body.name,
      organizationName: req.body.organizationName,
      organizationEmail: req.body.organizationEmail,
      organizationAddress: req.body.organizationAddress,
      phoneNumber: req.body.phoneNumber,

      createdByUser: req.body.createdByUser,
    });
    if (organi) {
      return res.status(201).json({
        status: 201,
        message: "Organization created",
        body: organi,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "organization is not created",
        body: organi,
      });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+= createOrganisation");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const organizationList = async (req, res) => {
  try {
    let organization = await Organization.find().sort({ _id: -1 });
    const userOrg = [];
    const Org = organization.filter((one) => {
      if (one.createdByUser == req.user.id) {
        return userOrg.push(one);
      }
    });
    // userOrg.sort({ _id: -1 });
    // return;
    // // return;
    // // const userOrg = [].sort({ _id: -1 });
    // // for (const data of organization) {
    // //   if (data.createdByUser == req.user.id) userOrg.push(data);
    // // }

    if (organization) {
      return res.status(200).json({
        status: 200,
        message: "All Organization",
        body: { organization, userOrg },
      });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Not Found", body: organization });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+= organizationList");

    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const oneOrganization = async (req, res) => {
  // console.log(req, '================______---________--------------_____');
  try {
    let one = await Organization.findById(req.params.id);

    if (one) {
      return res.status(200).json({
        status: 200,
        message: "Orgnaization Details",
        body: one,
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "Not Found ", body: {} });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__ oneOrgnaization");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const updateOrganization = async (req, res) => {
  try {
    const organization = await Organization.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    if (req.files && req.files.image.name) {
      const image = req.files.image;
      if (image) {
        organization.image =
          fileUploadImage(image, "organizationImage") || organization.image;
      }
    }
    // organization.name = req.body.name || organization.name;
    // organization.name = req.body.description || organization.description;
    if (organization) {
      const result = await organization.save();
      return res.status(200).json({
        status: 200,
        message: "Updated",
        body: result,
      });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+_ updateAdminProfile");
    return res
      .status(400)
      .json({ status: 400, message: "Something went wrong" });
  }
};

export {
  createOrganisation,
  organizationList,
  oneOrganization,
  updateOrganization,
};
