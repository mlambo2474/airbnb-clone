import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
} from "../types/registerTypes";

// const registeredUserInfofromLocalStorage = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")) : null;
const initialState = {
  userInfo : null, // registeredUserInfofromLocalStorage,
};
export const registerUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        registerLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        registerLoading: false,
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return {
        registerLoading: false,
        registerError: action.payload,
      };
    default:
      return state;
  }
};
