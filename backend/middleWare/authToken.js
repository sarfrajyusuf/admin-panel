import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const jwtToken = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      let token = req.headers.authorization.split(' ')[1];
      let result = await jwt.verify(token, process.env.JWT_SECRET_KEY);

      const checkUser = await userModel.findOne({
        _id: result.id,
        loginTime: result.iat,
      });

      if (checkUser) {
        req.user = checkUser;

        next();
      } else {
        return error(res, 'Please Login First');
      }
    } catch (err) {
      console.log(err.message, '=========----------------=========JWToken');
      res.status(400).json({
        status: 400,
        message: 'Token has been expire need to login first',
      });
    }
  } else {
    res.status(401).json('Not Authorized, No token, Need to Re-Login');
  }
};

export const Admin = async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not Authorized as Admin');
  }
};

// export const planCheck = async (req, res, next) => {
//   if (req.user && req.user.isAdmin && req.user.planPurchase === true) {
//     next();
//   } else {
//     res.status(401);
//     throw new Error('Not Authorized as Admin');
//   }
// };

export const subAdminAuth = async (req, res, next) => {
  if (req.user && req.user.role === 1) {
    next();
  } else {
    res.status(401);
    throw new Error('Not Authorized as Admin');
  }
};
