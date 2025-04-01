import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../types/userTypes";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    console.log("Dispatching USER_LOGIN_REQUEST");
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      //headers for sending content type , app.JSON which is being sent to the server
      //very much required when sending POST request but not neccessarily GET
      headers: {
        "Content-Type": "application/json",
      },
    };
    //destructuring data from the request
    const { data } = await axios.post(
      "http://localhost:5000/login",
      { email, password },
      config
    );
    //storing the data(user) in the local storage
    //payload is the data recieved from our server
    console.log("Dispatching USER_LOGIN_SUCCESS with data:", data);
    localStorage.setItem("userInfo", JSON.stringify(data))
    dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data
    })
  } catch (error) {
    console.log("Dispatching USER_LOGIN_FAIL")
    dispatch({
        type: USER_LOGIN_FAIL,
        //in the error we are checking whether there is a response in the error or 
        //whether there is an error message or there is just an error
        payload: error.response && error.response.data.message ? 
        error.response.data.message : error.message
    })
  }
};

export const logout =() => async(dispatch) => {
    console.log("Dispatching USER_LOGOUT");
    dispatch({
        type: USER_LOGOUT,
    })
}