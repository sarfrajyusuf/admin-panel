import Plan from '../models/planModels.js';
import User from '../models/userModel.js';

const create = async (req, res) => {
  try {
    let plan = await Plan.create(req.body);
    if (plan) {
      return res.status(200).json({
        status: 200,
        message: 'Plan created Successfully',
        body: plan,
      });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: 'Plan is not created', body: plan });
    }
  } catch (error) {
    console.log(error, '+_+_++++_+_+_+_+_+_+_+_+__+_+_+= created');

    return res.status(500).json({
      status: 500,
      message: 'Something Went Wrong',
      body: {},
    });
  }
};

const planList = async (req, res) => {
  try {
    let plan = await Plan.find();
    if (plan) {
      return res.status(200).json({
        status: 200,
        message: 'All Plans',
        body: plan,
      });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: 'Not Found', body: plan });
    }
  } catch (error) {
    console.log(error, '+_+_++++_+_+_+_+_+_+_+_+__+_+_+= planList');

    return res.status(500).json({
      status: 500,
      message: 'Something Went Wrong',
      body: {},
    });
  }
};
const updatePlanType = async (req, res) => {
  try {
    const userId = req.user.id;
    if (userId) {
      let chnagePlanType = await User.findOneAndUpdate(
        { _id: userId },
        {
          planType: req.body.planType,
          planPurchase: true,
          palnId: req.body.planId,
        }
      );
      return res.status(200).json({
        status: 200,
        message: 'Plan purchesed successfully',
        body: chnagePlanType,
      });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: 'Not purchesed', body: '' });
    }
  } catch (error) {
    console.log(error, '+_+_++++_+_+_+_+_+_+_+_+__+_+_+= updatePlanType');

    return res.status(500).json({
      status: 500,
      message: 'Something Went Wrong',
      body: {},
    });
  }
};

export { create, planList, updatePlanType };
