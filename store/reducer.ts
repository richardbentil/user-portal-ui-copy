import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../features/auth";

/////
export default combineReducers({
  userReducer,
});
