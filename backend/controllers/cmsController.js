import { error, success } from '../Config/helper.js';
import cms from '../models/cmsModels.js';

export const termAndConditoin = async (req, res) => {
  try {
    let result = await cms.findOneAndUpdate({ _id: req.params.id }, req.body);
    return success(res, ' Successfull', result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const create = async (req, res) => {
  try {
    let result = await cms.create(req.body);
    return success(res, ' Successfull', result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const cmsdata = async (req, res) => {
  try {
    let data = await cms.create(req.body);
    res.json(data);
  } catch (error) {}
};

export const getAll = async (req, res) => {
  try {
    let result = await cms.find();

    if (result) {
      res.status(200);
      return success(res, ' Successfull', result);
    } else {
      return error(res, 'Something went wrong do not get all cms data');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getById = async (req, res) => {
  try {
    let result = await cms.findById(req.params.cmsid);

    if (result) {
      res.status(200);
      return success(res, ' Successfull', result);
    } else {
      return error(res, 'Something went wrong do not get single id data');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
