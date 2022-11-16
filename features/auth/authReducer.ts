import { createSlice } from "@reduxjs/toolkit";
import { AuthReducerState } from "../../store/state";

const authReducer = createSlice({
  name: "authReducer",
  initialState: AuthReducerState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authReducer.reducer;
export const {} = authReducer.actions;
