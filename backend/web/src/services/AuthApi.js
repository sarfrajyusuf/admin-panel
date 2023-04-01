import axios from "axios";

export const BASE_URL = "http://localhost:5000/api/";

export const REGISTER = async (values) => {
  const BASE_URL = "http://localhost:5000/api/";
  const url = BASE_URL + "register/create";
  const res = await axios.post(url, values);
  try {
    return res;
  } catch (error) {
    return error;
  }
};

export const LOGIN = async (values) => {
  const BASE_URL = "http://localhost:5000/";
  const url = BASE_URL + "login";
  const res = await axios.post(url, values);
  try {
    return res;
  } catch (error) {
    return error;
  }
};
export const GETALLUSER = async () => {
  const BASE_URL = "http://localhost:5000/";
  const url = BASE_URL + "getUserData";
  const res = await axios.get(url);
  try {
    return res;
  } catch (error) {
    return error;
  }
};

export const FORGOTPASSWORD = async (values) => {
  const BASE_URL = "http://localhost:5000/";
  const url = BASE_URL + `forgotPassword`;
  const res = await axios.post(url, values);
  try {
    return res;
  } catch (error) {
    return error;
  }
};
// export const UPDATEUSER = async (id, values) => {
//   const BASE_URL = "http://localhost:8000/";
//   const url = BASE_URL + `userUpdate/${id}`;
//   const res = await axios.patch(url, values);
//   try {
//     return res;
//   } catch (error) {
//     return error;
//   }
// };
