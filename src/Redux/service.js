import axios from "axios";

export const createUser = async (data) => {
  try {
    const res = await axios.post("http://localhost:8080/user/create", data);
    return res;
  } catch (error) {
    return error;
  }
};

export const verifyUser = async (data) => {
  try {
    const resp = await axios.get("http://localhost:8080/user/verify", {
      headers: {
        Authorization: `Bearer ${data}`,
      },
    });
    return resp.data;
  } catch (error) {
    return error;
  }
};
