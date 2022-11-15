import { createSlice } from "@reduxjs/toolkit";
import { AuthReducerState } from "../../store/state";

const authReducer = createSlice({
  name: "authReducer",
  initialState: AuthReducerState,
  reducers: {
    resetAuth: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    authPending: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {},
});

export default authReducer.reducer;
export const { resetAuth, authPending } = authReducer.actions;
