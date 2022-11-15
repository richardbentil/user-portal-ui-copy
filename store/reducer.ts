import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth";
import { responseReducer } from "../features/slice";
/////
export default combineReducers({
  authReducer,
  responseReducer,
});
