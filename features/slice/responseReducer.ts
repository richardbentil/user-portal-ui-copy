import { createSlice } from "@reduxjs/toolkit";
import { ResponseReducerState } from "../../store/state";

const responseReducer = createSlice({
  name: "responseReducer",
  initialState: ResponseReducerState,
  reducers: {
    responsePending: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    responseError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    responseMessage: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.error = null;
    },
    clearResponse: (state) => {
      state.loading = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {},
});

export default responseReducer.reducer;
export const {
  responsePending,
  responseError,
  responseMessage,
  clearResponse,
} = responseReducer.actions;
