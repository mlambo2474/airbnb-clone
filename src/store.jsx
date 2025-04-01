
import { configureStore } from "@reduxjs/toolkit";
import {listingListReducer} from "./reducers/listingReducers";
import {modalReducer} from  "./reducers/modalReducer"
import { userLogInReducer } from "./reducers/userReducer";
import { registerUserReducer } from "./reducers/userRegisterReducer"

const store = configureStore({
  reducer: {
    listingList: listingListReducer ,
    modal : modalReducer,
    userLogin: userLogInReducer,
    userRegister : registerUserReducer,
  },
  // No need to manually add thunk, it's included by default
});

export default store;

