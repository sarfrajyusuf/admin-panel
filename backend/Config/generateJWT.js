import jwt from 'jsonwebtoken';
import { unixTimestamp } from './helper.js';
export const generateToken = async (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  });
  const time = unixTimestamp();
  return {
    token,
    time,
  };
  ``;
};
