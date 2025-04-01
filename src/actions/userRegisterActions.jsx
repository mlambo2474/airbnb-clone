import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL
} from "../types/registerTypes";
import axios from "axios"

export const registerUser = (email, password) => async(dispatch) =>{
    try{
    dispatch({
      type:  USER_REGISTER_REQUEST
    })
    const config = {
      //headers for sending content type , app.JSON which is being sent to the server
      //very much required when sending POST request but not neccessarily GET
      headers: {
        "Content-Type": "application/json",
      },
    };

      const { data } = await axios.post("http://localhost:5000/register", {email, password}, config)
      localStorage.setItem("userInfo", JSON.stringify(data))
      
  dispatch({
    type: USER_REGISTER_SUCCESS,
    payload: data
  })
    }catch(error){
   dispatch({
    type: USER_REGISTER_FAIL,
    payload: error.response?.data?.message || "Registration failed",

    })
    }
}