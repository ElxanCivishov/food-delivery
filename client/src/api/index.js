import axios from "axios";

const newReqest = axios.create({
  baseURL: "http://127.0.0.1:5001/restourantdb/us-central1/app/",
});

export const validateUserJWTToken = async (token) => {
  try {
    const res = await newReqest.get(`/api/user/jwtVerification`, {
      headers: { Authorization: "Bearer " + token },
    });
    return (await res).data.data;
  } catch (error) {
    return error;
  }
};
