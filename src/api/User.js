import axios from "axios";
export async function loginUser(email, password, setError, setErrMsg) {
  try {
    const response = await axios.post(
      "https://brewerybe.onrender.com/api-v1/user/login",
      {
        email: email,
        password: password,
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    setError(true);
    setErrMsg(error.response.data.error);
  }
}

export async function registerUser(
  username,
  email,
  password,
  setError,
  setErrMsg
) {
  try {
    const response = await axios.post(
      "https://brewerybe.onrender.com/api-v1/user/register",
      {
        username: username,
        email: email,
        password: password,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    setError(true);
    setErrMsg(error.response.data.error);
  }
}
