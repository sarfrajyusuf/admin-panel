import Mission from "../models/MissionModels.js";
import Volunteer from "../models/VoulentariesModels.js";

import { Validator } from "node-input-validator";
import {
  checkValidation,
  failed,
  fileUploadImage,
  success,
} from "../Config/helper.js";
import MissionModels from "../models/MissionModels.js";

const createMission = async (req, res) => {
  try {
    console.log(req.body.ManagerId == "null", "===============body");
    // return;
    const objFiles = req.files.image;

    // return;
    const v = new Validator(req.body, {
      name: "string|required",
      dateAndTime: "required",
      description: "string|required",
      eventManagerId: "string|required",
    });

    const errorResponse = await checkValidation(v);
    if (errorResponse) return failed(res, errorResponse);

    if (req.files && req.files.image.name) {
      const image = objFiles;
      if (image) {
        req.body.image = fileUploadImage(image, "eventImages");
      }
    }

    const newMission = await Mission.create({
      name: req.body.name,
      image: req.body.image,
      dateAndTime: req.body.dateAndTime,
      description: req.body.description,
      eventManagerId: req.body.eventManagerId,
      ManagerId:
        req.body.ManagerId == "null" ? req.user.id : req.body.ManagerId,
    });
    // console.log(newMission, '========================mission');
    // return;
    if (newMission) {
      return res.status(201).json({
        status: 201,
        message: "Event Cretaed Successfully",
        body: newMission,
      });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__createMission");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const getAllMission = async (req, res) => {
  const { limit, page } = req.query;
  try {
    let allMission = await Mission.find()
      .sort({ _id: -1 })
      .limit(limit || 50)
      .skip(parseInt(page) * limit);

    let total = await Mission.find().count();
    if (allMission) {
      return res.status(200).json({
        status: 200,
        message: "All Missions",
        body: { allMission, total },
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "Not Found ", body: {} });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__createMission");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};
const getOneMission = async (req, res) => {
  try {
    const mission = await Mission.findById(req.params.id).populate(
      "assignManager"
    );
    // let mission = Mission.findById(req.params.id).populate(
    //   "tasks.volunteerAssignForTask"
    // );
    console.log(mission, "=========");

    if (mission) {
      return res.status(200).json({
        status: 200,
        message: "All Missions",
        body: mission,
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "Not Found ", body: {} });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__createMission");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const updateStatus = async (req, res) => {
  try {
    // console.log(req.body, '====================body');
    const status = await Mission.findByIdAndUpdate(
      { _id: req.body.id },
      req.body
    );

    const updatedStatus = await Mission.findById(req.body.id);
    if (updatedStatus) {
      return res.status(200).json({
        status: 200,
        message: "Status Updated Successfully",
        body: updatedStatus,
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "Not Found ", body: {} });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__updateStatus");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};
const activeMission = async (req, res) => {
  try {
    const active = await Mission.find({ status: 0 }).sort({ _id: -1 });
    // console.log(active, '===============0========active');
    const saved = await Mission.find({ status: 1 }).sort({ _id: -1 });
    // console.log(saved, '===============1========saved');

    if (active || saved) {
      return res.status(200).json({
        status: 200,
        message: "Active And Saved Missions",
        body: { active, saved },
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "Not Found ", body: {} });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+__activeMission");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const assignManager = async (req, res) => {
  try {
    const {
      assignManager, // assignmanger id
      EventId,
    } = req.body;

    let assignMissionss = await Mission.findOne({ _id: EventId });

    if (assignMissionss.assignManager) {
      for (let data of assignMissionss.assignManager) {
        console.log(data, assignManager, "=jejejjejeeeeeeee");
        if (data == assignManager) {
          return res
            .status(404)
            .json({ status: 404, message: "allready assign", body: {} });
        }
      }
    }

    //@des : updateing the assing manager id
    let mission = await Mission.updateOne(
      {
        _id: EventId,
      },
      { $push: { assignManager: assignManager } }
    );

    let assignMission = await Mission.find({ _id: EventId });

    if (assignMission) {
      return res.status(200).json({
        status: 200,
        message: "Event assign successfully",
        body: assignMission,
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "Event not assign", body: {} });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+___assignManager");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const searchMission = async (req, res) => {
  console.log(req.body);
  // return;
  const user = await MissionModels.find({
    name: { $regex: req.body.name, $options: "i" },
    isAdmin: { $ne: "true" },
  });

  return success(res, "get data ", {
    user,
  });
};

const addTasks = async (req, res) => {
  const task = req.body.task;
  console.log(req.body, "----------------");

  const volunteerAssignForTask =
    req.body.volunteerAssignForTask == "undefined"
      ? []
      : [req.body.volunteerAssignForTask];

  console.log(volunteerAssignForTask, "============");

  try {
    req.body.image = fileUploadImage(req.files.image, "eventImages");
    let taskforVolunteer = await Mission.updateOne(
      {
        _id: req.query.id,
      },
      {
        $push: {
          tasks: {
            image: req.body.image,
            task: task,
            volunteerAssignForTask: volunteerAssignForTask,
          },
        },
      }
    );

    if (taskforVolunteer) {
      return res.status(200).json({
        status: 200,
        message: "Task created successfully",
        body: taskforVolunteer,
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "Task not created", body: {} });
    }
  } catch (error) {
    console.log(error, "+_+_++++_+_+_+_+_+_+_+_+__+_+_+___addTasks");
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

const assignTaskForVolunteer = async (req, res) => {
  try {
    const { volunteerAssignForTask, missionId, taskId } = req.body;
    const getOneDataqq = await Mission.updateOne(
      { "tasks._id": taskId },
      {
        $push: {
          "tasks.$.volunteerAssignForTask": volunteerAssignForTask,
        },
      }
    );

    const getOneData = await Mission.findOne({ _id: missionId });
    console.log(getOneData, "===============getOneData");
    if (getOneData) {
      return res.status(200).json({
        status: 200,
        message: "Task assign successfully",
        body: getOneData,
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "Task not created", body: {} });
    }
  } catch (error) {
    console.log(
      error,
      "+_+_++++_+_+_+_+_+_+_+_+__+_+_+___assignTaskForVolunteer"
    );
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
      body: {},
    });
  }
};

export {
  createMission,
  getAllMission,
  activeMission,
  updateStatus,
  getOneMission,
  assignManager,
  searchMission,
  addTasks,
  assignTaskForVolunteer,
};
