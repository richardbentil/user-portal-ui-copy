import { createAsyncThunk } from "@reduxjs/toolkit";
import controller from "../../controller";
import userModel from "../../models/userModel";

const authThunk = createAsyncThunk("authentication/thunk", async () => {
  try {
    return await controller<userModel>({});
  } catch (error) {
    throw error;
  }
});

export default authThunk;
